import React from 'react';
import { connect } from "react-redux";
import { setAuthedUser } from '../actions/authedUser';
import User from './User';

class LoginUser extends React.Component {

    login = () => {
        this.props.dispatch(setAuthedUser(this.props.user.id));
    }


    render() {
        const {user} = this.props;
        return (
            <div className='login-user' onClick={this.login}>
                <User avatarURL={user.avatarURL} name={user.name}/>
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