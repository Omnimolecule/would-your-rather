import React from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared'

class App extends React.Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <div className='container'>
        <h1 className='center'>Would you rather?</h1>
      </div>
    );
  }
}

export default connect()(App);
