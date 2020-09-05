import { combineReducers } from 'redux';

import login from './login';
import task from './task';

export default combineReducers({
  login,
  task,
});
