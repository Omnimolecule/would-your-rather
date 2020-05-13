import React from 'react'
import { NavLink } from 'react-router-dom'

class Nav extends React.Component {

    logout = () => {
        console.log("Logout");
    }

    render() {
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
                    <li>
                        <button onClick={this.logout}>Logout</button>
                    </li>
                </ul>
            </nav>
        );
    }
} 

export default Nav;