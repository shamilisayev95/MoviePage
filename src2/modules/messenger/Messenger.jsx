import React from 'react';
import './messangerStyled.css';
import { getAllMessages, logOut } from '../REST';

import WS from '../../websocket/Websocket';
import Message from './components/message/Message.jsx';

export default class Messenger extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            curMessage: null,
            allMessages: [],
        };

        this.ws = new WS();
        this.ws.getOnMessage(this.getAllMessagesOnWS.bind(this));
        this.getMessages();
    }

    getAllMessagesOnWS = messages => {
        this.setState({
            allMessages: messages,
        });
    };

    getMessages = () => {
        getAllMessages()
            .then(messages => this.setState({
                allMessages: messages
            }))
            .catch(error => console.log('it is not Array'));
    };

    handleSubmit = event => {
        event.preventDefault();

        const { saveCurrentMessage, currentUserName } = this.props;
        const messageData = { user: currentUserName, message: this.state.curMessage };

        saveCurrentMessage(messageData);
        this.ws.sendMessage(messageData);
        this.setState({
            curMessage: '',
        });
    };

    handleInput = event => {
        this.setState({
            curMessage: event.target.value,
        });
    };

    logOut = () => {
        const { logOutUser, currentUserName } = this.props;

        logOut({ user: currentUserName });
        logOutUser();
    };

    render() {
        const { handleInput, logOut, handleSubmit } = this;
        const messages = this.state.allMessages;
        const currentUser = this.props.currentUserName;

        return (
            <div className='root__main-container'>
                <button
                    onClick={logOut}
                    className='root__log-out-btn'
                    children='Log out'
                />
                <div className='main-container__chat-section'>
                    <ul className='chat-section__chat-window'>
                        {messages.length
                            ? messages.map((messageObj, index) => (
                                  <Message 
                                    key={index}
                                    user={messageObj.user}
                                    text={messageObj.message}
                                    curUser={currentUser}
                                  />
                              ))
                            : null}
                    </ul>
                    <form 
                    onSubmit={handleSubmit} 
                    className='chat-window__chat-form'
                    >
                        <input
                            value={this.state.curMessage}
                            onChange={handleInput}
                            className='chat-form__message-input'
                            required
                        />
                        <button 
                            children='Send'
                            className='chat-form__submit-button' 
                            />
                    </form>
                </div>
            </div>
        );
    }
}
