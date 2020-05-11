import React from 'react';
import { connect } from "react-redux";

class Login extends React.Component {
    render() {
        {console.log(this.props)}
        return (
            <div>
                <h1 className='center'>Login</h1>
                <ul>
                    {this.props.userIds.map((user) =>
                        <li>{user}</li>
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