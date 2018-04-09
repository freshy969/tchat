const React = require('react');
const PropTypes = require('prop-types');

const PhotoUpload = React.createClass({

  upload(){
    
  }

  render() {
    return (
      <button onClick=(this.upload)>Update Image </button>
    );
  }

});

module.exports = PhotoUpload;
