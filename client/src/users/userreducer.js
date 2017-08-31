import axios from 'axios';
// import cookie from 'react-cookie';
// import { logoutUser } from './auth';
// import { STATIC_ERROR, FETCH_USER } from './types';
export const API_URL = 'http://localhost:3000';
export const CLIENT_ROOT_URL = 'http://localhost:8080';

//= ===============================
// Utility actions
//= ===============================

// export function fetchUser(uid) {
//   return function (dispatch) {
//     axios.get(`${API_URL}/user/${uid}`, {
//       headers: { Authorization: cookie.load('token') },
//     })
//     .then((response) => {
//       dispatch({
//         type: FETCH_USER,
//         payload: response.data.user,
//       });
//     })
//     .catch(response => dispatch(errorHandler(response.data.error)));
//   };
// }

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
export const increment = () => {
  console.log('hired');
  return (dispatch) => {
    axios.get(`${API_URL}/api/chat`)
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