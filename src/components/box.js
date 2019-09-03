import React, { Component } from 'react';
import Fruit from './fruit';

class Box extends Component {

  constructor(props) {
        super(props);
        this.handlerMoveElement = this.handlerMoveElement.bind(this);
    }


  handlerMoveElement(e) {
    if (e.target.id.includes('fruitId')) return;
    const elem = e.target.parentNode;
    if (elem.className === 'boxPlace') return;
    const targets = document.getElementsByClassName('boxHidden');
    const pageX = e.pageX;
    const pageY = e.pageY;
    this.props.moveElement(elem, targets, pageX, pageY, this.props.gameData);
  }

  render () {
    var isHidden = this.props.boxData.busy ? 'box' : 'boxHidden';
    return (
      <div className='boxPlace'>
        <div className={isHidden}
             id={this.props.boxData.id}
             onMouseDown={this.handlerMoveElement}>
          {isHidden === 'box' &&
            this.props.boxData.fruits.map(el =>
              <Fruit fruitData={el}
                     key={el.id}
                     moveElement={this.props.moveElement}
                     gameData={this.props.gameData}
               />
            )
          }
        </div>
      </div>
    );
  }
}

export default Box;
