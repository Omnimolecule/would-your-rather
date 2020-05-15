import React from 'react';

const User = (props) => {
    return (
        <div className='question-avatar'>
            <img
                src={props.avatarURL}
                alt={`Avatar of ${props.name}`}
                className='avatar' />
            <span className='center'>{props.name}</span>
        </div>
    );
}

export default User;