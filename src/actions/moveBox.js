function gameData(data) {
    var copyData = [...data]
    return {
        type: 'GAME_UPDATE',
        gameData: copyData
    };
}

export function moveBox(e, data) {
  return (dispatch) => {
    var elem = e.target.parentNode;
    console.log(elem);
    var targets = document.getElementsByClassName('boxHidden');
    var coords = getCoords(elem);
    var shiftX = e.pageX - coords.left;
    var shiftY = e.pageY - coords.top;
    elem.style.position = 'absolute';

    elem.ondragstart = function() {
      return false;
    };

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
      elem.style.position = 'static';
      console.log(targets);
      for(let i=0;i<targets.length;i++){
        var bounds = targets[i].getBoundingClientRect();
        //console.log(bounds);
        //console.log(e.pageX);
        //console.log(e.pageY);
        if(e.pageX < bounds.right &&
          e.pageX > bounds.left  &&
          e.pageY > bounds.top  &&
          e.pageY < bounds.bottom) {
            var newData = makeNewGameData(elem.id, targets[i].id);
            console.log(elem.id);
            return dispatch(gameData(newData));
        }
      }
      elem.style.position = 'static';
      return dispatch(gameData(data));
    };

    function makeNewGameData(oldPos, newPos) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].id == oldPos) {
          data[i].busy = false;
          var fruitsInBox = data[i].fruits;

        }
      }
      for (let i = 0; i < data.length; i++) {
        if (data[i].id == newPos) {
          data[i].busy = true;
          data[i].fruits = fruitsInBox;
        }
      }
      return data;
    }
  }
}
