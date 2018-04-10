import { connect } from 'react-redux';
import React from 'react';
import { requestUser } from '../../actions/user_actions';
import { updateUser } from '../../actions/session_actions';
import ProfileEdit from './my_profile_edit';

const mapStateToProps = (state) => {
  return {
    img_url: '',
    screen_name: '',
    age: '',
    city: '',
    pronouns: '',
    bio: '',
    first_date_idea: '',
    my_aesthetic: '',
    my_anthem: '',
    hobbies: '',
    looking_for: ''
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestUser: (user) => dispatch(requestUser(id)),
    updateUser: (user) => dispatch(updateUser(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEdit);
