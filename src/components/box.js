import React, { Component } from 'react';
import Fruit from './fruit';

class Box extends Component {

  constructor(props) {
        super(props);
        this.handlerMoveBox = this.handlerMoveBox.bind(this);
    }


  handlerMoveBox(e) {
    if (e.target.id.includes('fruitId'))
      return
    this.props.moveBox(e, this.props.gameData);
  }

  render () {
    var isHidden = this.props.boxData.busy ? 'box' : 'boxHidden';
    return (
      <div className='boxPlace'>
        <div className={isHidden}
             id={this.props.boxData.id}
             onMouseDown={this.handlerMoveBox}>
          {isHidden === 'box' &&
            this.props.boxData.fruits.map(el =>
              <Fruit fruitData={el}
                     key={el.id}
                     moveFruit={this.props.moveFruit}
                     moveBox={this.props.moveBox}
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
