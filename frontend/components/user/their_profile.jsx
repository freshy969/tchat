import React from 'react';
import { Link } from 'react-router-dom';

class Profile extends React.Component {

  constructor(props) {
    super(props);
    this.props.requestUser(this.props.match.params.userId);
  }

  componentWillUnmount() {
    this.props.removeUserState();
    // this.props.requestUser(this.props.match.params.userId);
  }

  // componentWillReceiveProps(nextProps) {
  //   if (this.props.match.params.userId !== nextProps.match.params.userId) {
  //     this.props.requestUser(nextProps.match.params.userId);
  //   }
  // }

  render() {
    if (this.props.user===null){
      return 1;
    }
    if (this.props.user)
    return (
      <header className="profile-container">
        <div className="profile">
          <div className="top-bar">
            <img className="profpicture" src={`assets/${this.props.user.img_url || 'generic.jpg'}`}/>
            <div className="top-sub-container">
              <div className="top-info">
                <span className="screen-name">{this.props.user.screen_name}</span>
                <div className="top-sub-info">
                  <span className="age">{this.props.user.age}</span>
                  <span className="drama-dot">.</span>
                  <span className="city">{this.props.user.city}</span>
                  <span className="drama-dot">.</span>
                  <span className="pronouns">{this.props.user.pronouns}</span>
                </div>
              </div>
              <div className="profile-nav-buttons-container">
                <Link to="/profile/edit" className="profile-nav-buttons">
                  <span>Edit</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="bottom-left">
              <h2 className="questions">Bio</h2>
              <p className="answers">{this.props.user.bio || '-'}</p>
              <h2 className="questions">First date idea</h2>
              <p className="answers">{this.props.user.first_date_idea || '-'}</p>
            </div>
            <div className="bottom-right">
              <div className="bright-container">
                <img className="bright-images bwhite" src="assets/painting-nails.png"/>
                <p className="bright-answers">{this.props.user.my_aesthetic || '-'}</p>
              </div>
              <div className="bright-container">
                <img className="bright-images" src="assets/music-stock.png"/>
                <p className="bright-answers">{this.props.user.my_anthem || '-'}</p>
              </div>
              <div className="bright-container">
                <img className="bright-images" src="assets/hobbies.png"/>
                <p className="bright-answers">{this.props.user.hobbies || '-'}</p>
              </div>
              <div className="looking-for">
                <p className="bright-answers"><span className="boldedgirl">Looking For </span>{this.props.user.looking_for || '-'}</p>
              </div>
            </div>
          </div>

        </div>
      </header>
    )
  }
}

export default Profile;
