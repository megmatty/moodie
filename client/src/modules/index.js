import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import counter from './counter';
import newentries from '../entries/newentries';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  router: routerReducer,
  counter,
  newentries,
  form: formReducer
})
