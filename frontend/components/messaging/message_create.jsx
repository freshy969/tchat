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
    let message2 = {
      message_thread_id: this.props.currentMessagethread.id,
      receiver_id: this.props.currentUser.id === this.props.currentMessagethread.initiator_id? this.props.currentMessagethread.receiver_id : this.props.currentMessagethread.initiator_id,
      sender_id: this.props.sender_id
    }
    const message = Object.assign({}, this.state, message2);
    this.props.postNewMessage(message).then(() => this.props.requestMessagethreads());
    this.setState({message: ''});
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
            <br/>
              <input className="session-submit" type="submit" value={this.props.message} />
          </div>
        </form>
      </div>
    );
  }
}

export default MessageCreate;
