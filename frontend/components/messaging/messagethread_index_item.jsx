import React from 'react';
import { Link } from 'react-router-dom';
import {receiveCurrentMessagethreadId} from '../../actions/message_actions';

class MessagethreadIndexItem extends React.Component{

  constructor(props){
    super(props);
    this.receiveCurrent = this.receiveCurrent.bind(this);
  }

  receiveCurrent(){
    dispatch(receiveCurrentMessagethreadId(this.props.messagethread.id));
  }

  render(){

    const t = new Date(this.props.messagethread.last_message_sent);
    const current = new Date();
    const timeAgo = Math.abs(current.getTime() - t.getTime());
    let output = "";
    if (timeAgo<(1000*60)){
      output = `${Math.floor(timeAgo/1000)}` + " seconds ago";
    } else if (timeAgo<(1000*3600)){
      output = `${Math.floor(timeAgo/(1000*60))}` + " minutes ago";
    } else if (timeAgo<(1000*3600*24)){
      output = `${Math.floor(timeAgo/(1000*3600))}` + " hours ago";
    } else if (timeAgo<(1000*3600*24*2)){
      output = "yesterday"
    } else if (timeAgo<(1000*3600*24*7)){
      output = `${Math.floor(timeAgo/(1000*3600*24))}` + " days ago";
    } else if (timeAgo<(1000*3600*24*14)){
      output = "one week ago"
    } else if (timeAgo<(1000*3600*24*365)){
      output = `${Math.floor(timeAgo/(1000*3600*24*7))}` + " weeks ago"
    } else if (timeAgo<(1000*3600*24*365*2)){
      output = "one year ago"
    } else {
      output = `${Math.floor(timeAgo/(1000*3600*24*365))}` + " years ago"
    }
    console.log(output);

    return(
    <button onClick={this.receiveCurrent} className="messagethread-index-item">
      <div className="messagethread-index-left">
        <img src={(this.props.messagethread.initiator_id===this.props.currentUserId? this.props.messagethread.receiver_profpic : this.props.messagethread.initiator_profpic) || 'http://res.cloudinary.com/dyv6nxcqz/image/upload/v1523398897/default.jpg'}/>
      </div>
      <div className="messagethread-index-right">
        <div className="messagethread-index-topright">
          <div className="toprightleftindexthreadlol">
            <span>{this.props.messagethread.initiator_id===this.props.currentUserId? this.props.messagethread.receiver_name : this.props.messagethread.initiator_name} </span>
            <span className="toprightleftlolpnouns">{this.props.messagethread.initiator_id===this.props.currentUserId? this.props.messagethread.receiver_pronouns : this.props.messagethread.initiator_pronouns}</span>
          </div>
          <span className="mthreadindexlast">{output}</span>
        </div>
        <div className="messagethread-index-bottomright">
          <span>{this.props.messagethread.last_message}</span>
        </div>
      </div>
    </button>
    )
  }

}

export default MessagethreadIndexItem;
