import { combineReducers } from 'redux';

import modal from './modal_reducer';
import currentMessagethreadsReducer from './current_messagethreads_reducer';

export default combineReducers({
  modal,
  currentMessagethread: currentMessagethreadsReducer,
});
