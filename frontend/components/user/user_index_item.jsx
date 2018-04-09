import React from 'react';
import { Link } from 'react-router-dom';

const PokemonIndexItem = ({ user }) => (
  <li className="user-index-item">
    <Link to={`/users/${user.id}`}>
      <span>{user.screen_name}</span>
      <img src={`assets/${user.img_url || 'generic.jpg'}`}/>
      <span>{user.age}</span>
      <span>{user.city}</span>
      <span>{user.pronouns}</span>
    </Link>
  </li>
);

export default PokemonIndexItem;
