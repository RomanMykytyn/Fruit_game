import React, { Component } from 'react';

class Fruit extends Component {

  handlerMoveFruit(e) {
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
            console.log('ok');
        }
      }
    };

  }

  render () {
    var isHidden = this.props.fruitData.busy ? 'fruit' : 'fruitHidden';
    return (
        <div className={isHidden} idplace={this.props.fruitData.id}>
          {isHidden === 'fruit' &&
            <img src={'images/' + this.props.fruitData.type + '.png'}
                 id={this.props.fruitData.id}
                 onMouseDown={this.handlerMoveFruit}/>
          }
        </div>
    );
  }
}

export default Fruit;
