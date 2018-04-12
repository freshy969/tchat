import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      screen_name: '',
      pronouns: '',
      city: 'Bay Area',
      age: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleErrors = this.handleErrors.bind(this);
  }

  handleErrors() {
    this.props.clearErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(()=>this.props.closeModal());

  }

  componentDidMount(){
    this.handleErrors();
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {

    return (

      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box modal-form">
          <h2>
            {this.props.formType}
          </h2>
          <div className="login-form">
            <br/>
            <label>Username
              <br/>
              <input type="text"
                value={this.props.username? this.props.username : this.state.username}
                onChange={this.update('username')}
                className="login-input"
              />
            </label>
            <br/>
            <label>Password <br/>
              <input type="password"
                value={this.props.password? this.props.password : this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <br/>
            <label>Screen Name <br/>
              <input type="text"
                value={this.props.screen_name? this.props.screen_name : this.state.screen_name}
                onChange={this.update('screen_name')}
                className="login-input"
              />
            </label>
            <br/>
            <label>Pronouns <br/>
              <input type="text"
                value={this.props.pronouns? this.props.pronouns : this.state.pronouns}
                onChange={this.update('pronouns')}
                className="login-input"
              />
            </label>
            <br/>
            <label>City <br/>
              <div className="fakeforms">
              <div className="forms">
              <div className="fakeform">
              <select value={this.props.city? this.props.city : this.state.city} onChange={this.update('city')} className="login-input">
                <option selected="selected" value="Bay Area">Bay Area</option>
                <option value="LA">LA</option>
                <option value="NY">NY</option>
                <option value="DC">DC</option>
                <option value="Miami">Miami</option>
              </select>
              </div>
              </div>
            </div>
            </label>
            <br/>
            <label>Age <br/>
              <input type="number"
                value={this.props.age? this.props.age : this.state.age}
                onChange={this.update('age')}
                className="login-input"
              />
            </label>
            <br/>
            <div className="errors">
              {this.renderErrors()}
            </div>
            <br/>
              <input className="session-submit" type="submit" value={this.props.message} />
          </div>
        </form>
      </div>
    );
  }
}

export default SignupForm;
