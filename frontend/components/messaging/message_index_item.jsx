import React from 'react';
import { Link } from 'react-router-dom';

class MessageIndexItem extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    console.log(this.props);
    return(
    <div className="message-index-item">
      {this.props.message.message}
    </div>
    )
  }

}

export default MessageIndexItem;
