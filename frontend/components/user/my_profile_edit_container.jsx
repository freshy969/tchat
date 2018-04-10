import { connect } from 'react-redux';
import React from 'react';
import { requestUser } from '../../actions/user_actions';
import { updateUser } from '../../actions/user_actions';
import ProfileEdit from './my_profile_edit';

const mapStateToProps = (state) => {
  return {
    id: state.session.currentUser.id,
    img_url: '',
    screen_name: state.session.currentUser.screen_name,
    age: state.session.currentUser.age,
    city: state.session.currentUser.city,
    pronouns: state.session.currentUser.pronouns,
    bio: state.session.currentUser.bio,
    first_date_idea: state.session.currentUser.first_date_idea,
    my_aesthetic: state.session.currentUser.my_aesthetic,
    my_anthem: state.session.currentUser.my_anthem,
    hobbies: state.session.currentUser.hobbies,
    looking_for: state.session.currentUser.looking_for
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestUser: (user) => dispatch(requestUser(id)),
    updateUser: (user) => dispatch(updateUser(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEdit);
