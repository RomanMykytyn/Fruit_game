import {gameOver} from '../utils/gameOver';
import {updateBox} from '../utils/updateBox';
import {updateFruit} from '../utils/updateFruit';
import createGameData from '../utils/createGameData';


export function moveElement(elem, targets, pageX, pageY, data) {
  return (dispatch) => {
    var coords = getCoords(elem);
    var shiftX = pageX - coords.left;
    var shiftY = pageY - coords.top;
    elem.style.position = 'absolute';

    elem.ondragstart = function() {
      return false;
    };

    for(let i=0;i<targets.length;i++) {
      targets[i].classList.add("glow");
    }

    function getCoords(elem) {
      var box = elem.getBoundingClientRect();
      return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
      };
    }

    function moveAt(e) {
      elem.style.left = e.pageX - shiftX + 'px';
      elem.style.top = e.pageY - shiftY + 'px';
    }

    document.onmousemove = function(e) {
      moveAt(e);
    }

    elem.onmouseup = function(e) {
      document.onmousemove = null;
      elem.onmouseup = null;
      elem.style = null;

      for(let i=0;i<targets.length;i++) {
        targets[i].classList.remove("glow");
      }

      for(let i=0;i<targets.length;i++){
        var bounds = targets[i].getBoundingClientRect();
        if(e.pageX < bounds.right &&
          e.pageX > bounds.left  &&
          e.pageY > bounds.top + pageYOffset  &&
          e.pageY < bounds.bottom + pageYOffset) {

            if(elem.id.includes('fruitId')) {
              var newData = updateFruit(elem.id, targets[i].getAttribute('idplace'), elem.getAttribute('type'), data);
            }
            else {
              var newData = updateBox(elem.id, targets[i].id, data);
            }

            if (gameOver(newData)) {
              newData = createGameData().gameData;
              alert('Well done! Do it again.');
            }

            return dispatch({type: 'GAME_UPDATE', gameData: [...newData]});
        }
      }

      return dispatch({type: 'GAME_UPDATE', gameData: [...data]});
    };
  }
}
