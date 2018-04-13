import React from 'react';
import { Link } from 'react-router-dom';
import MessagethreadIndexItem from './messagethread_index_item';
import MessageIndexItem from './message_index_item';
import { Element, animateScroll } from 'react-scroll';

class Messaging extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      message: "",
    }
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkForEnter = this.checkForEnter.bind(this);
    this.scrollToBottom = this.scrollToBottom.bind(this);
  }

  componentWillMount(){
    this.props.requestMessages();
    this.props.requestMessagethreads();
    // this.scrollToBottom();
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom(){
    const element = document.getElementById("scrollBottom");
    element.scrollIntoView();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value,
    });
  }

  checkForEnter(e){
    if (e.key === 'Enter'){
      this.handleSubmit(e);
    }
  }

  handleSubmit(e){
    e.preventDefault();
    let message2 = {
      message_thread_id: this.props.currentMessagethread.id,
      receiver_id: this.props.currentUser.id === this.props.currentMessagethread.initiator_id? this.props.currentMessagethread.receiver_id : this.props.currentMessagethread.initiator_id,
      sender_id: this.props.sender_id
    }
    const message = Object.assign({}, this.state, message2);
    this.props.postNewMessage(message).then(() => this.props.requestMessagethreads());
    this.setState({message: ''});
  }

  //   if !(this.props.)
  // pickUser = "fPick a user to message with!"
  // else {
  //   pickUser = empty div
  // }
  render() {
    console.log(this.props);

    return(
      <header className="message-container">
        <div className="messagethread-index-container">
          {this.props.messagethreads.map(messagethread => <MessagethreadIndexItem currentUserId={this.props.currentUser.id} key={messagethread.id} messagethread={messagethread} />)}
        </div>
        <div className="messages-container">
          <div className="messages-topcontainer">
            <Link to={`/users/${this.props.currentMessagethread? (this.props.currentMessagethread.initiator_id===this.props.currentUser.id? this.props.currentMessagethread.receiver_id : this.props.currentMessagethread.initiator_id): ""}`}>
              <img src={this.props.currentMessagethread? ((this.props.currentMessagethread.initiator_id===this.props.currentUser.id? this.props.currentMessagethread.receiver_profpic : this.props.currentMessagethread.initiator_profpic) || 'http://res.cloudinary.com/dyv6nxcqz/image/upload/v1523398897/default.jpg') : 'http://res.cloudinary.com/dyv6nxcqz/image/upload/v1523605725/pink-left-arrow-png-image-229.png'}/>
            </Link>
            <div className="messages-toprightcontainer">
              <span className="messages-screenname">{this.props.currentMessagethread? (this.props.currentMessagethread.initiator_id===this.props.currentUser.id? this.props.currentMessagethread.receiver_name : this.props.currentMessagethread.initiator_name) : "Pick a friend to chat"}</span>
              <span>{this.props.currentMessagethread? (this.props.currentMessagethread.initiator_id===this.props.currentUser.id? this.props.currentMessagethread.receiver_pronouns : this.props.currentMessagethread.initiator_pronouns) : ""}</span>
            </div>
          </div>
          <div className="message-middlecontainer">
            {this.props.messages.map(message => <MessageIndexItem currentUserId={this.props.currentUser.id} message={message}/>)}
            <div id="scrollBottom"/>
          </div>
          <div className="message-bottomcontainer">
            <form onSubmit={this.handleSubmit}>
              <textarea
                value={this.state.message}
                rows="5"
                cols="33"
                onChange={this.update('message')}
                className="new-message"
                onKeyDown={this.checkForEnter}
              ></textarea>
            </form>
          </div>
        </div>
      </header>
    )
  }
}

export default Messaging;
