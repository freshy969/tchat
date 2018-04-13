import React from 'react';
import { Link } from 'react-router-dom';
import {receiveCurrentMessagethreadId} from '../../actions/message_actions';

class Profile extends React.Component {

  constructor(props) {
    super(props);
    this.props.requestUser(this.props.match.params.userId);
    this.handleToMessaging = this.handleToMessaging.bind(this);
  }

  componentWillUnmount() {
    this.props.removeUserState();
  }

  handleToMessaging(){
    if (!!this.props.user.hasThread){
      this.props.receiveCurrentMessagethreadId(this.props.user.hasThread);
    } else{
      this.handleModal('newPost');
    }
  }

  handleModal(type) {
    return ((e) => {
      e.preventDefault();
      this.props.openModal(type);
    })
  }

  render() {
    if (this.props.user===null){
      return 1;
    }
    if (this.props.user)
    return (
      <header className="profile-container">
        <div className="profile">
          <div id="top-bar">
            <img id="profpicture" src={`${this.props.user.img_url || 'http://res.cloudinary.com/dyv6nxcqz/image/upload/v1523398897/default.jpg'}`}/>
            <div id="top-sub-container">
              <div id="top-info">
                <div id="screen-name">{this.props.user.screen_name}</div>
                <div id="top-sub-info">
                  <span id="age">{this.props.user.age}</span>
                  <span id="drama-dot">.</span>
                  <span id="city">{this.props.user.city}</span>
                  <span id="drama-dot">.</span>
                  <span id="pronouns">{this.props.user.pronouns}</span>
                </div>
              </div>
              <div id="profile-nav-buttons-container">
                <Link to={`/messaging`} id="profile-nav-buttons" onClick={this.handleToMessaging}>
                  <span>Message</span>
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
