import React from 'react';
import { Link, withRouter } from 'react-router-dom';

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
    // console.log(this.props);
    e.preventDefault();
    let messagethread1 = {
      receiver_id: this.props.user.id,
      initiator_id: this.props.sender_id,
    }
    let message1 = {
      receiver_id: this.props.user.id,
      sender_id: this.props.sender_id,
    }
    const messagethread = Object.assign({}, messagethread1);
    const message = Object.assign({}, this.state, message1);
    this.props.postMessageThread(messagethread).then(() => this.props.postNewMessage(message)).then(() => this.props.closeModal()).then(() => this.props.history.push('/messaging'));
    // this.props.postNewMessage(message)).then(() => this.props.requestMessagethreads());
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
          <div className="login-form">
            <br/>
            <label>Give it your best shot<br /> <br /> <br />
              <textarea
                value={this.state.message}
                rows="5"
                cols="33"
                onChange={this.update('message')}
                className="new-message"
                onKeyDown={this.checkForEnter}
              ></textarea>
            </label>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(MessageCreate);
