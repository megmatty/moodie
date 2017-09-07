import axios from 'axios';
// import cookie from 'react-cookie';
// import { logoutUser } from './auth';
// import { STATIC_ERROR, FETCH_USER } from './types';
export const API_URL = 'http://localhost:3000';
export const CLIENT_ROOT_URL = 'http://localhost:8080';

const initialState = {
  user: 0
}

//reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        mood: state.user + 1
      }

    default:
      return state
  }
}

//action
export const sendEntry = (entries) => {
  console.log('hired');
  return (dispatch) => {
    axios.post(`${API_URL}/api/chat`, {
      'entries': entries 
    })
      .then((response) => {
        console.log(response);

          dispatch({
            type: 'INCREMENT',
            payload: response.data
          })
      })
    .catch(function (error) {
      console.log(error);
    });
  }
}