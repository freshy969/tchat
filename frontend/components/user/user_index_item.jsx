import React from 'react';
import { Link } from 'react-router-dom';

class UserIndexItem extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return(
    <li className="user-index-item">
      <div className="user-index-link">
        <Link to={`/users/${this.props.user.id}`} className="user-index-photo">
          <img src={`assets/${this.props.user.img_url || 'generic.jpg'}`}/>
        </Link>
        <div className="screen-name-index">
          <span>{this.props.user.screen_name}</span>
        </div>
        <div className="agenloc">
          <div className="age-index">
            <span>{this.props.user.age}</span>
          </div>
          <div className="drama-dot-index">
            <span>.</span>
          </div>
          <span>{this.props.user.city}</span>
        </div>
        <div className="pronouns-index">
          <span>{this.props.user.pronouns}</span>
        </div>
      </div>
    </li>
  )
  }

}

export default UserIndexItem;
