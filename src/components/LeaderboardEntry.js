import React from 'react';
import { connect } from 'react-redux';
import User from './User';

class LeaderBoardEntry extends React.Component {
    render() {
        const { user } = this.props;
        return (
            <div className='leaderboard-entry'>
                <User avatarURL={user.avatarURL} name={user.name}/>
                <div className='info-column'>
                    <span>Questions asked: {user.questions.length}</span>
                    <span>Answers given: {Object.keys(user.answers).length}</span>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ users }, { userId }) {
    const user = users[userId];
    return { user };
}

export default connect(mapStateToProps)(LeaderBoardEntry)