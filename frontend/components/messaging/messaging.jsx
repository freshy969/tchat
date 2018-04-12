import React from 'react';
import { Link } from 'react-router-dom';
import MessagethreadIndexItem from './messagethread_index_item';

class Messaging extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount(){
    this.props.requestMessages();
    this.props.requestMessagethreads();
  }

  render() {
    return(
      <header className="message-container">
        <div className="message-index-container">
          {this.props.messagethreads.map(messagethread => <MessagethreadIndexItem currentUserId={this.props.currentUser.id} key={messagethread.id} messagethread={messagethread} />)}
        </div>

        <div className="featured-message-container">
          {this.props.messages.map(message => <Messageindexitem currentUserId={this.props.currentUser.id}/>)}
        </div>
      </header>
    )
  }
}

export default Messaging;
