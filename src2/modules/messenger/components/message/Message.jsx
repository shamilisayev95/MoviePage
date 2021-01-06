import React from 'react';

const Message = props => { 
    return (
        <li className={
                props.user === props.curUser ? 
                'chat-window__message current-user-message': 
                'chat-window__message another-user-message'
            }
        >
            <span className='message__user-name'>{props.user}</span>
            <span className='message__user-text'>{props.text}</span>
        </li>
    )
}

export default React.memo(Message);