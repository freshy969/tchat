import { combineReducers } from 'redux';

import sessionReducer from './session_reducer';
import errors from './errors_reducer';
import ui from './ui_reducer';
import user from './user_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  errors,
  ui,
  user
});

export default rootReducer;
