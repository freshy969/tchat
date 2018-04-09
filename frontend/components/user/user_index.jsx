import React from 'react';
import { Link } from 'react-router-dom';

class Profile extends React.Component {

  constructor(props) {
    super(props);
    this.props.requestUsers();
  }

  componentWillMount() {
    // this.props.requestUser(this.props.match.params.userId);
  }

  // componentWillReceiveProps(nextProps) {
  //   if (this.props.match.params.userId !== nextProps.match.params.userId) {
  //     this.props.requestUser(nextProps.match.params.userId);
  //   }
  // }

  render() {
    if (this.props.users===null){
      return 1;
    }
    if (this.props.users){
      console.log(this.props.users)
      return (
        <header className="profile-container">
          Welcome hom fam ur here ur here ur here.
          {}
        </header>
      )
    }
  }
}

export default Profile;
