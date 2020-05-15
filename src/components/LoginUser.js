import React from 'react';
import { connect } from "react-redux";
import { setAuthedUser } from '../actions/authedUser';

class LoginUser extends React.Component {

    login = () => {
        this.props.dispatch(setAuthedUser(this.props.user.id));
    }


    render() {
        return (
            <div className='login-user' onClick={this.login}>
                 <img
                    src={this.props.user.avatarURL}
                    alt={`Avatar of ${this.props.user.name}`}
                    className='avatar' />
                <span>{this.props.user.name}</span>
            </div>
        );
    }
}

function mapStateToProps({users}, {userId}) {
    let user = users[userId];

    return {
        user
    }
}

export default connect(mapStateToProps)(LoginUser)