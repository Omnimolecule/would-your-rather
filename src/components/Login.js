import React from 'react';
import { connect } from "react-redux";
import LoginUser from './LoginUser';

class Login extends React.Component {
    render() {
        return (
            <div>
                <h1 className='center'>Login</h1>
                <ul>
                    {this.props.userIds.map((user) =>
                        <li key={user}>
                            <LoginUser userId={user} />
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

function mapStateToProps({ users }) {
    return {
        userIds: Object.keys(users)
    }
}

export default connect(mapStateToProps)(Login)