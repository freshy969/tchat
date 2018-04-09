import React from 'react';
import { Link } from 'react-router-dom';

class PokemonIndexItem extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return(
    <li className="user-index-item">
      <Link to={`/users/${this.props.user.id}`} className="user-index-link">
        <img src={`assets/${this.props.user.img_url || 'generic.jpg'}`}/>
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
      </Link>
    </li>
  )
  }

}

export default PokemonIndexItem;
