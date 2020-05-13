import React from 'react';
import { connect } from 'react-redux';
import User from './User';

class Leaderboard extends React.Component {

    render() {
        const { users } = this.props;
        return (
            <div>
                <h1>Leaderboard</h1>
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>
                            <User userId={user.id} />
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

function mapStateToProps({ users }) {
    const userList = Object.keys(users).map((user) => users[user]);
    const sortedList = userList.sort((a, b) => b.questions.length + Object.keys(b.answers).length - a.questions.length - Object.keys(a.answers).length);
    return {
        users: sortedList
    }
}

export default connect(mapStateToProps)(Leaderboard)