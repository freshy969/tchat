import React from 'react';
import { Link } from 'react-router-dom';

class MessageCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkForEnter = this.checkForEnter.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    console.log(this.props);
    e.preventDefault();
    let message2 = {
      receiver_id: this.props.user.id,
      initiator_id: this.props.sender_id,
    }
    const messagethread = Object.assign({}, this.state, message2);
    this.props.postMessageThread(messagethread).then(() => this.props.requestMessagethreads());
  }

  checkForEnter(e){
    if (e.key === 'Enter'){
      this.handleSubmit(e);
    }
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
            <label>Hey is for horses<br></br>
              <textarea
                value={this.state.message}
                rows="5"
                cols="33"
                onChange={this.update('message')}
                className="new-message"
                onKeyDown={this.checkForEnter}
              ></textarea>
            </label>
            <input className="session-submit" type="submit" value={this.props.message} />
          </div>
        </form>
      </div>
    );
  }
}

export default MessageCreate;
