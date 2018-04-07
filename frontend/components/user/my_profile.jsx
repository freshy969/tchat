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
                <span className="drama-dot">.</span>
                <span className="city">{this.props.currentUser.city}</span>
                <span className="drama-dot">.</span>
                <span className="pronouns">{this.props.currentUser.pronouns}</span>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="bottom-left">
              <h2 className="questions">Who am I?</h2>
              <p className="answers">{this.props.currentUser.bio}</p>
              <h2 className="questions">My perfect first date</h2>
              <p className="answers">{this.props.currentUser.first_date_idea}</p>
            </div>
            <div className="bottom-right">
              <div className="bright-container">
                <img className="bright-images bwhite" src="assets/painting-nails.png"/>
                <p className="bright-answers">{this.props.currentUser.my_aesthetic}</p>
              </div>
              <div className="bright-container">
                <img className="bright-images" src="assets/music-stock.png"/>
                <p className="bright-answers">{this.props.currentUser.my_anthem}</p>
              </div>
              <div className="bright-container">
                <img className="bright-images" src="assets/hobbies.png"/>
                <p className="bright-answers">{this.props.currentUser.hobbies}</p>
              </div>
              <div className="looking-for">
                <p className="bright-answers">{this.props.currentUser.looking_for}</p>
              </div>
            </div>
          </div>

        </div>
      </header>
    )
  }
}

export default Profile;
