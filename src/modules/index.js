import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import counter from './counter';
import moodreducer from '../moods/moodreducer';

export default combineReducers({
  router: routerReducer,
  counter,
  moodreducer
})
