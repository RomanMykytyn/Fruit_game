import React, { Component } from 'react';

class Fruit extends Component {

  constructor(props) {
        super(props);
        this.handlerMoveFruit = this.handlerMoveFruit.bind(this);
        this.handlerMoveBox = this.handlerMoveBox.bind(this);
    }

  handlerMoveFruit(e) {
    this.props.moveFruit(e, this.props.gameData);
  }

  handlerMoveBox(e) {
    this.props.moveBox(e, this.props.gameData);
  }

  render () {
    var isHidden = this.props.fruitData.busy ? 'fruit' : 'fruitHidden';
    return (
        <div className={isHidden}
             idplace={this.props.fruitData.id}
             onMouseDown={this.handlerMoveBox}>
          {isHidden === 'fruit' &&
            <img src={'images/' + this.props.fruitData.type + '.png'}
                 id={this.props.fruitData.id}
                 type={this.props.fruitData.type}
                 onMouseDown={this.handlerMoveFruit}/>
          }
        </div>
    );
  }
}

export default Fruit;
