import React from 'react';
import { Link } from 'react-router-dom';

class MessagethreadIndexItem extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return(
    <li className="messagethread-index-item">
      <div className="messagethread-index-link">
        testing testing 1 2 testing
      </div>
    </li>
  )
  }

}

export default MessagethreadIndexItem;
