
import React, { Fragment } from 'react';

const DUMMY_DATA = [
  {
    senderId: "perborgen",
    text: "Hi James! Please remember to buy the food for tomorrow! I’m gonna be handling the gifts and Jake’s gonna get the drinks",
    id:1,
    messageSentFrom:"chat-message-from",
    imagePath:require("../../../images/avatar55-sm.jpg")
  },
  {
    senderId: "janedoe",
    text: "Don’t worry Mathilda!",
    id:2,
    messageSentFrom:"chat-message-to",
    imagePath:require("../../../images/avatar55-sm.jpg")
  },
  {
    senderId: "perborgen",
    text: "I already bought everything",
    id:3,
    messageSentFrom:"chat-message-to",
    imagePath:require("../../../images/avatar55-sm.jpg")
  },
  {
    senderId: "janedoe",
    text: "Hi James! Please remember to buy the food for tomorrow! I’m gonna be handling the gifts and Jake’s gonna get the drinks",
    id:4,
    messageSentFrom:"chat-message-from",
    imagePath:require("../../../images/avatar55-sm.jpg")
  }
]


class ChatListComponent extends React.Component {
  constructor() {
    super()
    this.state = {
       messages: DUMMY_DATA
    }
  }
  render() {
    return (
      <Fragment>
        <ul className="message-list">                 
          {this.state.messages.map(message => {
            return (
             <li key={message.id} className={message.messageSentFrom}>  
                { message.messageSentFrom === "from" }              
                <img src={message.imagePath} className="chat-image" alt='' />
                <p>
                  {message.text}
                </p>
             </li>
           )
         })}
       </ul>
     </Fragment>
    )
  }
}

export default ChatListComponent;