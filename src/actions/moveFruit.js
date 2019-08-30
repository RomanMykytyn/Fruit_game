function gameData(data) {
    var copyData = [...data]
    return {
        type: 'GAME_UPDATE',
        gameData: copyData
    };
}

export function moveFruit(e, data) {
  return (dispatch) => {
  var elem = document.getElementById(e.target.id);
  var targets = document.getElementsByClassName('fruitHidden');
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
    for(let i=0;i<targets.length;i++){
      var bounds = targets[i].getBoundingClientRect();
      console.log(bounds);
      console.log(e.pageX);
      console.log(e.pageY);
      if(e.pageX < bounds.right &&
        e.pageX > bounds.left  &&
        e.pageY > bounds.top  &&
        e.pageY < bounds.bottom) {
          console.log(elem.getAttribute('type'));
          console.log(data);
          console.log(targets[i].getAttribute('idplace'));
          var newData = makeNewGameData(elem.id, targets[i].getAttribute('idplace'), elem.getAttribute('type'));
          return dispatch(gameData(newData));
      }
    }
    elem.style.position = 'static';
    return dispatch(gameData(data));
  };

  function makeNewGameData(oldPos, newPos, pieceFruit) {
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i].fruits.length; j++) {
        if (data[i].fruits[j].id === oldPos) {
          data[i].fruits[j].busy = false;
        }
        if (data[i].fruits[j].id === newPos) {
          console.log('newPos');
          data[i].fruits[j].busy = true;
          data[i].fruits[j].type = pieceFruit;
        }
      }
    }
    return data;
  }
}
}
