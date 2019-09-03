
import { connect } from 'react-redux';
import Box from './box';
import React from 'react';
import { moveElement } from '../actions/moveElement';


class App extends React.Component {

  render () {
    return (
      <div className='boxContainer'>
        {this.props.gameData.map(el =>
          <Box boxData={el}
               key={el.id}
               moveElement={this.props.moveElement}
               gameData={this.props.gameData}
           />
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return ({
        gameData: state.gameData
    });
};

const mapDispatchToProps = (dispatch) => {
    return {
      moveElement: (elem, targets, pageX, pageY, data) => dispatch(moveElement(elem, targets, pageX, pageY, data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
