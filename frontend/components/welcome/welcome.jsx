import React from 'react';
import { Link } from 'react-router-dom';
import { clearErrors } from '../../actions/session_actions';
import LoginFormContainer from '../login_form/login_form_container';
import SignupFormContainer from '../login_form/signup_form_container';
import Modal from '../modal/modal';

class Welcome extends React.Component{
  constructor(props) {
    super(props);

    this.handleModal = this.handleModal.bind(this);
  }

  handleModal(type) {
    return ((e) => {
      e.preventDefault();
      this.props.openModal(type);
    })
  }

  render(){
    const { currentUser, logout} = this.props;

    return (
      <div className="splash">
        <Modal />
        <span className="logo">tChat</span>
        <h1>YOU DESERVE <br></br> BETTER</h1>
        <p className="Description">On T-Chat, you’re more than just a gender. You <br></br>
          have stories to tell, and passions to share, and <br></br>
          things to talk about that are more interesting than <br></br>
          the weather. Get noticed for who you are, not <br></br>
          what you look like. Because you deserve what dating <br></br>
          deserves: better.</p>
        <nav className="login-signup">
          <div className="login">
            <span>Have an account?</span>
            <button className="signin" onClick={this.handleModal('login')}>Sign in</button>
          </div>
        </nav>
        <form className="fakeforms">
          <p className="your">You Are A</p>
          <div className="forms">
            <div className="fakeform">
              <select name="sexuality">
                <option value="valid">Valid</option>
                <option value="beautiful">Beautiful</option>
                <option value="fierce">Fierce</option>
                <option value="witty">Witty</option>
              </select>
            </div>

            <div className="fakeform">
              <select name="gender">
                <option value="person">Person</option>
                <option value="person">Person</option>
                <option value="person">Person</option>
                <option value="person">Person</option>
              </select>
            </div>
            <div className="signup">
              <button className="signups" onClick={this.handleModal('signup')}>Join Today!</button>
            </div>
          </div>
          <div className="demo-login">
            <button className="demo-signin" onClick={this.handleModal('demo')}>Demo</button>
          </div>
      </form>
      </div>
    )

  }

}

export default Welcome;
