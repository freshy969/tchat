import React from 'react';
import { Link } from 'react-router-dom';

class ProfileEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img_url: this.props.img_url,
      screen_name: this.props.screen_name,
      age: this.props.age,
      city: this.props.city,
      pronouns: this.props.pronouns,
      bio: this.props.bio,
      first_date_idea: this.props.first_date_idea,
      my_aesthetic: this.props.my_aesthetic,
      my_anthem: this.props.my_anthem,
      hobbies: this.props.hobbies,
      looking_for: this.props.looking_for
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.updateUser(user);
  }

  render() {
    console.log(this.props)
    return(
      <header className="profile-container">
        <form onSubmit={this.handleSubmit}>
        <div className="profile">
          <div className="top-bar">
            <img className="profpicture" src={`assets/${this.state.img_url || 'generic.jpg'}`}/>
            <div className="top-info">
              <span className="screen-name">
                {this.state.screen_name}
              </span>
              <div className="top-sub-container">
                <div className="top-sub-info">
                  <span className="age">{this.state.age}</span>
                  <span className="drama-dot">.</span>
                  <span className="city">{this.state.city}</span>
                  <span className="drama-dot">.</span>
                  <span className="pronouns">{this.state.pronouns}</span>
                </div>
                <div className="profile-nav-buttons-container">
                  <input type="submit" value="Update" />
                </div>
              </div>
            </div>

          </div>
          <div className="bottom">
            <div className="bottom-left">
              <h2 className="questions">Bio</h2>
              <p className="answers">{this.state.bio || '-'}</p>
              <h2 className="questions">First date idea</h2>
              <p className="answers">{this.state.first_date_idea || '-'}</p>
            </div>
            <div className="bottom-right">
              <div className="bright-container">
                <img className="bright-images bwhite" src="assets/painting-nails.png"/>
                <p className="bright-answers">{this.state.my_aesthetic || '-'}</p>
              </div>
              <div className="bright-container">
                <img className="bright-images" src="assets/music-stock.png"/>
                <p className="bright-answers">{this.state.my_anthem || '-'}</p>
              </div>
              <div className="bright-container">
                <img className="bright-images" src="assets/hobbies.png"/>
                <p className="bright-answers">{this.state.hobbies || '-'}</p>
              </div>
              <div className="looking-for">
                <p className="bright-answers"><span className="boldedgirl">Looking For </span>{this.state.looking_for || '-'}</p>
              </div>
            </div>
          </div>

        </div>
        </form>
      </header>
    )
  }
}

export default ProfileEdit;
