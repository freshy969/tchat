import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
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
    this.props.requestUsers();
    this.props.processForm(user).then(()=>this.props.closeModal())
  }

  componentDidMount(){
    this.handleErrors();
    if(this.props.formType==="Demo"){
      this.setState({
        username: 'Demo',
        password: 'password'
      })
    }
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
            <label>Username <br></br>
              <input type="text"
                value={this.props.username? this.props.username : this.state.username}
                onChange={this.update('username')}
                className="login-input"
              />
            </label>
            <br/>
            <label>Password <br></br>
              <input type="password"
                value={this.props.password? this.props.password : this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
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

export default LoginForm;
