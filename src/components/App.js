import React from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared'
import Login from './Login';
import Homescreen from './Homescreen'

class App extends React.Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {

    if (!this.props.isLoggedIn) {
      return <Login />
    }

    return (
      <div className='container'>
        <Homescreen />
      </div>
    );
  }
}

function mapStateToProps({authedUser, users}) {
  return {
    isLoggedIn: authedUser !== null,
  }
}

export default connect(mapStateToProps)(App);
