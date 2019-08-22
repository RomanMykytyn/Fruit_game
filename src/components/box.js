import React, { Component } from 'react';
import Fruit from './fruit';

class Box extends Component {
  render () {
    var isHidden = this.props.boxData.busy ? 'box' : 'boxHidden';
    return (
      <div className={isHidden}>
        {this.props.boxData.fruits.map(el =>
          <Fruit fruitData={el} key={el.id} />
        )}
      </div>
    );
  }
}

export default Box;
