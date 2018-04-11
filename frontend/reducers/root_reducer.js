import { combineReducers } from 'redux';

import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import uiReducer from './ui_reducer';
import userReducer from './user_reducer';
import usersReducer from './users_reducer';


const rootReducer = combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
  ui: uiReducer,
  users: usersReducer,
  user: userReducer
});

export default rootReducer;
