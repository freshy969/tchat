import React from 'react';

class NavBar extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
    <header className="header-group">
      <div className="left-nav">
        <img className="navlogo" src="assets/tchat-logo.png"/>
      </div>
      <div className="right-nav">
        <img className="profpic" src={`assets/${this.props.currentUser.img_url || 'generic.jpg'}`}/>
        <button className="header-button" onClick={this.props.logout}>Log Out</button>
      </div>
    </header>
    )
  }
}

export default NavBar;
