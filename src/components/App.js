
import { connect } from 'react-redux';
import Box from './box';
import React from 'react';
import { moveFruit } from '../actions/moveFruit';
import { moveBox } from '../actions/moveBox';


class App extends React.Component {

  constructor(props) {
        super(props);

    }

  shouldComponentUpdate() {
    return true;
  }

  render () {
    console.log(this.props.gameData);
    return (
      <div className='boxContainer'>
        {this.props.gameData.map(el =>
          <Box boxData={el}
               key={el.id}
               moveFruit={this.props.moveFruit}
               moveBox={this.props.moveBox}
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
      moveFruit: (e, data) => dispatch(moveFruit(e, data)),
      moveBox: (e, data) => dispatch(moveBox(e, data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
