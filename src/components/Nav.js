import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { logout } from '../actions/authedUser';

class Nav extends React.Component {

    logout = () => {
        const { dispatch } = this.props;
        dispatch(logout());
    }

    render() {
        const { username } = this.props;
        return (
            <nav className='nav'>
                <ul>
                    <li>
                        <NavLink to='/' exact activeClassName='active'>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/add' activeClassName='active'>
                            Add Question
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/leaderboard' activeClassName='active'>
                            Leaderboard
                        </NavLink>
                    </li>
                    <li className='login-info'>
                        <span>Current user: {username}</span>
                    </li>
                    <li>
                        <button onClick={this.logout}>Logout</button>
                    </li>
                </ul>
            </nav>
        );
    }
}

function mapStateToProps({authedUser, users}) {
    const username = users[authedUser].name;
    return {
        username
    }
}

export default connect(mapStateToProps)(Nav);