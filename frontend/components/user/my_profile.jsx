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
          <img className="profpicture" src={`assets/${this.props.currentUser.img_url}`}/>
          {this.props.currentUser.screen_name}
          {this.props.currentUser.city}
          {this.props.currentUser.pronouns}
          {this.props.currentUser.age}
          {this.props.currentUser.bio}
          {this.props.currentUser.first_date_idea}
        </div>
      </header>
    )
  }
}

export default Profile;
