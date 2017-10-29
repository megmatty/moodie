import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import entries from './entries';
import users from './users';
import { reducer as formReducer } from 'redux-form';

console.log(entries);
console.log(users);

export default combineReducers({
  router: routerReducer,
  entries,
  users,
  form: formReducer
})
