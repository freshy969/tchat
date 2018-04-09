import React from 'react';
import { Link } from 'react-router-dom';
import UserIndexItem from './user_index_item';

class UserIndex extends React.Component {

  constructor(props) {
    super(props);
    // this.props.requestUsers();
  }

  // componentWillMount(){
  //   this.props.requestUsers();
  // }

  // componentDidMount() {
  //   // debugger;
  //   // this.props.requestUser(this.props.match.params.userId);
  //   this.props.requestUsers();
  // }

  // componentWillReceiveProps(nextProps) {
  //   if (this.props.match.params.userId !== nextProps.match.params.userId) {
  //     this.props.requestUser(nextProps.match.params.userId);
  //   }
  // }

  render() {
    if (this.props.users===null){
      return 1;
    }
    if (this.props.users.length>=4){
      console.log(this.props.users)
      return(
        <header className="index-container">
          <ul>
            {this.props.users.map(user => <UserIndexItem key={user.id} user={user} />)}
          </ul>
        </header>
      )
    }
  }
}

export default UserIndex;
