import { combineReducers } from 'redux';
import error from './error';
import user from './user';
import messages from './messages';

const rootReducer = combineReducers({
  error,
  user,
  messages,
});

export default rootReducer;
