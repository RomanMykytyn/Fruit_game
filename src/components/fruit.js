import React, { Component } from 'react';

class Fruit extends Component {

  constructor(props) {
        super(props);
        this.handlerMoveElement = this.handlerMoveElement.bind(this);
    }


  handlerMoveElement(e) {
    const elem = document.getElementById(e.target.id);
    const targets = document.getElementsByClassName('fruitHidden');
    const pageX = e.pageX;
    const pageY = e.pageY;
    this.props.moveElement(elem, targets, pageX, pageY, this.props.gameData);
  }

  render () {
    var isHidden = this.props.fruitData.busy ? 'fruit' : 'fruitHidden';
    return (
        <div className={isHidden}
             idplace={this.props.fruitData.id}>
          {isHidden === 'fruit' &&
            <img src={'images/' + this.props.fruitData.type + '.png'}
                 id={this.props.fruitData.id}
                 type={this.props.fruitData.type}
                 onMouseDown={this.handlerMoveElement}/>
          }
        </div>
    );
  }
}

export default Fruit;
