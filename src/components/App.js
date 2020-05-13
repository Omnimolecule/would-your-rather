import React from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared'
import Login from './Login';
import Homescreen from './Homescreen'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import QuestionDetail from './QuestionDetail';
import Nav from './Nav';
import Leaderboard from './Leaderboard';

class App extends React.Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {

    if (!this.props.isLoggedIn) {
      return <Login />
    }

    return (
      <Router>
        <div className='container'>
          <Nav />
          <Route path='/' exact component={Homescreen} />
          <Route path='/question/:id' component={QuestionDetail} />
          <Route path='/leaderboard' component={Leaderboard} />
        </div>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    isLoggedIn: authedUser !== null,
  }
}

export default connect(mapStateToProps)(App);
