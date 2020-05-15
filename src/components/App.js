import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared'
import Login from './Login';
import Homescreen from './Homescreen'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import QuestionPage from './QuestionPage';
import Nav from './Nav';
import Leaderboard from './Leaderboard';
import AddQuestion from './AddQuestion';
import LoadingBar from 'react-redux-loading'

class App extends React.Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {

    if (!this.props.isLoggedIn) {
      return (
        <Fragment>
          <LoadingBar />
          <Login />
        </Fragment>)
    }

    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='container'>
            <Nav />
            <Route path='/' exact component={Homescreen} />
            <Route path='/question/:id' component={QuestionPage} />
            <Route path='/leaderboard' component={Leaderboard} />
            <Route path='/add' component={AddQuestion} />
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    isLoggedIn: authedUser !== null,
  }
}

export default connect(mapStateToProps)(App);
