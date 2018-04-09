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
        <span>{this.props.user.screen_name}</span>
        <span>{this.props.user.age}</span>
        <span>{this.props.user.city}</span>
        <span>{this.props.user.pronouns}</span>
      </Link>
    </li>
  )
  }

}

export default PokemonIndexItem;
