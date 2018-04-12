import React from 'react';
import { Link } from 'react-router-dom';
// import UserIndexItem from './user_index_item';

class Messaging extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount(){
    this.props.requestMessages();
    this.props.requestMessagethreads();
  }

  render() {
    console.log(this.props.users)
    return(
      <header className="message-container">
        <div className="message-index-container">
          Placeholder
        </div>

        <div className="featured-message-container">
          Placeholder
        </div>
      </header>
    )
  }
}

export default Messaging;
