import React from 'react';
import { Link } from 'react-router-dom';

class MessageCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(()=>this.props.closeModal()).then(() => this.props.requestUsers()).then(() => this.props.requestMessagethreads()).then(() => this.props.requestMessages());
  }

  // e.preventDefault();
  // let message2 = {
  //   message_thread_id: this.props.currentMessagethread.id,
  //   receiver_id: this.props.currentUser.id === this.props.currentMessagethread.initiator_id? this.props.currentMessagethread.receiver_id : this.props.currentMessagethread.initiator_id,
  //   sender_id: this.props.sender_id
  // }
  // const message = Object.assign({}, this.state, message2);
  // this.props.postNewMessage(message).then(() => this.props.requestMessagethreads());
  // this.setState({message: ''});

  handleSubmit(e){
    const message = Object.assign({}, this.state, message2);
    this.props.postNewMessage(message).then(() => this.props.requestMessagethreads());
    this.setState({message: ''});
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

export default MessageCreate;
