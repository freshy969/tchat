import React from 'react';
import { Link } from 'react-router-dom';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // if !(this.props.currentUser) {
    //   return (
    //     <div>
    //       Loading...
    //     </div>
    //   )
    // }


    return(
      <header className="profile-container">
        <div className="profile">
          {this.props.currentUser.username}
        </div>
      </header>
    )
  }
}

export default Profile;
