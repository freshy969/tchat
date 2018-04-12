import React from 'react';
import { Link } from 'react-router-dom';
import MessagethreadIndexItem from './messagethread_index_item';
import MessageIndexItem from './message_index_item';

class Messaging extends React.Component {

  constructor(props) {
    super(props);

  }

  componentWillMount(){
    this.props.requestMessages();
    this.props.requestMessagethreads();
  }

  // componentWillUnmount(){
  //   this.setState({
  //     ui: this.props.currentMessagethread.id,
  //   });
  // }

  render() {
    return(
      <header className="message-container">
        <div className="messagethread-index-container">
          {this.props.messagethreads.map(messagethread => <MessagethreadIndexItem currentUserId={this.props.currentUser.id} key={messagethread.id} messagethread={messagethread} />)}
        </div>
        <div className="messages-container">
          <div className="messages-container-content">
            <div className="messages-topcontainer">
              <img src={this.props.currentMessagethread? ((this.props.currentMessagethread.initiator_id===this.props.currentUser.id? this.props.currentMessagethread.receiver_profpic : this.props.currentMessagethread.initiator_profpic) || 'http://res.cloudinary.com/dyv6nxcqz/image/upload/v1523398897/default.jpg') : 'http://res.cloudinary.com/dyv6nxcqz/image/upload/v1523556089/Blank.png'}/>
              <div className="messages-toprightcontainer">
                <span className="messages-screenname">{this.props.currentMessagethread? (this.props.currentMessagethread.initiator_id===this.props.currentUser.id? this.props.currentMessagethread.receiver_name : this.props.currentMessagethread.initiator_name) : ""}</span>
                <span>{this.props.currentMessagethread? (this.props.currentMessagethread.initiator_id===this.props.currentUser.id? this.props.currentMessagethread.receiver_pronouns : this.props.currentMessagethread.initiator_pronouns) : ""}</span>
              </div>
            </div>
            <div className="message-middlecontainer">
              {this.props.messages.map(message => <MessageIndexItem currentUserId={this.props.currentUser.id} message={message}/>)}
            </div>
            <div className="message-bottomcontainer">
              <textarea
                value=""
                rows="5"
                cols="33"
                onChange={null}
                className="new-message"
                ></textarea>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Messaging;
