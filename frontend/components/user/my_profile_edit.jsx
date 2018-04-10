import React from 'react';
import { Link } from 'react-router-dom';

class ProfileEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
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
    debugger;
    e.preventDefault();
    this.props.updateUser(this.state);
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
                <input type="string"
                  value={this.state.screen_name}
                  onChange={this.update('screen_name')}
                  className="login-input"
                />
              </span>
              <div className="top-sub-container">
                <div className="top-sub-info">
                  <span className="age">
                    <input type="number"
                      value={this.state.age}
                      onChange={this.update('age')}
                      className="login-input"
                      />
                  </span>
                  <span className="drama-dot">.</span>
                  <span className="city">
                    <input type="string"
                      value={this.state.city}
                      onChange={this.update('city')}
                      className="login-input"
                      />
                  </span>
                  <span className="drama-dot">.</span>
                  <span className="pronouns">
                    <input type="string"
                      value={this.state.pronouns}
                      onChange={this.update('pronouns')}
                      className="login-input"
                      />
                  </span>
                </div>
              </div>
            </div>

          </div>
          <div className="bottom">
            <div className="bottom-left">
              <h2 className="questions">Bio</h2>
              <p className="answers">
                <input type="string"
                  value={this.state.bio}
                  onChange={this.update('bio')}
                  className="login-input"
                  />
              </p>
              <h2 className="questions">First date idea</h2>
              <p className="answers">
                <input type="string"
                  value={this.state.first_date_idea}
                  onChange={this.update('first_date_idea')}
                  className="login-input"
                  />
              </p>
            </div>
            <div className="bottom-right">
              <div className="bright-container">
                <img className="bright-images bwhite" src="assets/painting-nails.png"/>
                <p className="bright-answers">
                  <input type="string"
                    value={this.state.my_aesthetic}
                    onChange={this.update('my_aesthetic')}
                    className="login-input"
                    />
                </p>
              </div>
              <div className="bright-container">
                <img className="bright-images" src="assets/music-stock.png"/>
                <p className="bright-answers">
                  <input type="string"
                    value={this.state.my_anthem}
                    onChange={this.update('my_anthem')}
                    className="login-input"
                    />
                </p>
              </div>
              <div className="bright-container">
                <img className="bright-images" src="assets/hobbies.png"/>
                <p className="bright-answers">
                  <input type="string"
                    value={this.state.hobbies}
                    onChange={this.update('hobbies')}
                    className="login-input"
                    />
                </p>
              </div>
              <div className="looking-for">
                <p className="bright-answers"><span className="boldedgirl">Looking For </span>
                  <input type="string"
                    value={this.state.looking_for}
                    onChange={this.update('looking_for')}
                    className="login-input"
                    />
                </p>
              </div>
            </div>
          </div>
          <div className="profile-nav-buttons-container">
            <input type="submit" value="Update" />
          </div>
        </div>
        </form>
      </header>
    )
  }
}

export default ProfileEdit;
