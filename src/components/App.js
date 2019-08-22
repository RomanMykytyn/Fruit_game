
import { connect } from 'react-redux';
import Box from './box';

import React from 'react';


class App extends React.Component {
  render () {
    console.log(this.props.gameData);
    return (
      <div className='boxContainer'>
        {this.props.gameData.map(el =>
          <Box boxData={el} key={el.id} />
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        gameData: state.gameData,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
