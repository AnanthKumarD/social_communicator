
import React, { Fragment } from 'react';
import SendMessageForm  from './SendMessageForm.js';
import ChatListComponent  from './ChatListComponent.js';

import './ChatViewComponent.scss';

class ChatViewComponent extends React.Component {
  // constructor(props) {
  //   super(props)
    
  // }
  closeChatWindow = (param) => {
      if(param==="close"){
        this.setState((prevState, props) => {
          console.log(props,'prevState')
          return {loadChatContainer: false};
        })
      }
  }
  render() {
    return (
      <Fragment>
        <div className="chat-view">
          <div className="chat-title-view">
            <span className="chat-title"> Chat</span>
            <span className="test"></span>
            <span className="glyphicon glyphicon-remove" onClick={()=>this.closeChatWindow("close")}></span>
          </div>
          <ChatListComponent />
          <SendMessageForm />
        </div>
      </Fragment>
    )
  }
}

export default ChatViewComponent;