import React, { Component } from 'react';

class Fruit extends Component {
  render () {
    var isHidden = this.props.fruitData.busy ? 'fruit' : 'fruitHidden';
    return (
        <div className={isHidden}>
          {isHidden === 'fruit' &&
            <img src={'images/' + this.props.fruitData.type + '.png'} />}
        </div>
    );
  }
}

export default Fruit;
