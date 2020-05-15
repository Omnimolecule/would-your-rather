import React from 'react';
import { connect } from 'react-redux';

class User extends React.Component {
    render() {
        const { user } = this.props;
        return (
            <div className='user'>
                <div className='question-avatar'>
                    <img
                        src={user.avatarURL}
                        alt={`Avatar of ${user.name}`}
                        className='avatar' />
                    <span>{user.name}</span>
                </div>
                <div>
                    <span>Questions asked: {user.questions.length}</span><br />
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

export default connect(mapStateToProps)(User)