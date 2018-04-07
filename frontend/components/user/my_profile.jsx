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
          <div className="top-bar">
            <img className="profpicture" src={`assets/${this.props.currentUser.img_url}`}/>
            <div className="top-info">
              <span className="screen-name">{this.props.currentUser.screen_name}</span>
              <div className="top-sub-info">
                <span className="age">{this.props.currentUser.age}</span>
                <span className="city">{this.props.currentUser.city}</span>
                <span className="pronouns">{this.props.currentUser.pronouns}</span>
              </div>
            </div>
          </div>
          <span className="bio">{this.props.currentUser.bio}</span>
          <span className="first-date-idea">{this.props.currentUser.first_date_idea}</span>
        </div>
      </header>
    )
  }
}

export default Profile;
