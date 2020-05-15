import React from 'react';
import { connect } from 'react-redux';
import LeaderBoardEntry from './LeaderboardEntry';

class Leaderboard extends React.Component {

    render() {
        const { users } = this.props;
        return (
            <div className='leaderboard'>
                <h1 className='center'>Leaderboard</h1>
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>
                            <LeaderBoardEntry userId={user.id} />
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