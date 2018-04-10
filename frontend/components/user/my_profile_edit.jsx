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
      looking_for: this.props.looking_for,
      img_url: this.props.img_url
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.handleCloudinary = this.handleCloudinary.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.updateUser(user).then(() => this.props.history.push('/profile'));
  }

  handleCloudinary(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(window.cloudinary_options, (error, results) => {
      if(error)
        console.log(error);
      else
        this.setState({ img_url: results[0].secure_url });
    });
  }

  // componentWillUnmount(){
  //   this.props.requestUser(this.props.id);
  // }

  render() {
    console.log(this.props)
    return(
      <header className="profile-container">
        <div className="profile-container-edit">
        <form onSubmit={this.handleSubmit}>
        <div className="profile">
          <div className="top-bar">
            <div className="edit-pic">
              <img className="profpicture" src={`${this.state.img_url || 'http://res.cloudinary.com/dyv6nxcqz/image/upload/v1523398897/default.jpg'}`}/>
              <div className="button-holder">
                <button
                  onClick={this.handleCloudinary}
                  className="new-profpic-button"
                >
                  Add image
                </button>
              </div>
            </div>
            <div className="top-info top-info-edit">
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
                    <select value={this.state.city} onChange={this.update('city')} className="login-input">
                      <option value="Bay Area">Bay Area</option>
                      <option value="LA">LA</option>
                      <option value="NY">NY</option>
                      <option value="DC">DC</option>
                      <option value="Miami">Miami</option>
                    </select>
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
                <textarea
                  value={this.state.bio}
                  rows="10"
                  cols="50"
                  onChange={this.update('bio')}
                  className="login-input"
                  ></textarea>
              </p>
              <h2 className="questions">First date idea</h2>
              <p className="answers">
                <textarea
                  value={this.state.first_date_idea}
                  rows="10"
                  cols="50"
                  onChange={this.update('first_date_idea')}
                  className="login-input"
                  ></textarea>
              </p>
            </div>
            <div className="bottom-right">
              <div className="bright-container">
                <img className="bright-images bwhite" src="assets/painting-nails.png"/>
                <p className="bright-answers">
                  <textarea
                    value={this.state.my_aesthetic}
                    rows="5"
                    cols="33"
                    onChange={this.update('my_aesthetic')}
                    className="login-input"
                    ></textarea>
                </p>
              </div>
              <div className="bright-container">
                <img className="bright-images" src="assets/music-stock.png"/>
                <p className="bright-answers">
                  <textarea
                    value={this.state.my_anthem}
                    rows="5"
                    cols="33"
                    onChange={this.update('my_anthem')}
                    className="login-input"
                    ></textarea>
                </p>
              </div>
              <div className="bright-container">
                <img className="bright-images" src="assets/hobbies.png"/>
                <p className="bright-answers">
                  <textarea
                    value={this.state.hobbies}
                    rows="5"
                    cols="33"
                    onChange={this.update('hobbies')}
                    className="login-input"
                    ></textarea>
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
            <input type="submit" value="Update" className="submit-prof-updates"/>
          </div>
        </div>
        </form>
        </div>
      </header>
    )
  }
}

export default ProfileEdit;
