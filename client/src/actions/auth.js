import axios from 'axios';
import { browserHistory } from 'react-router';
import cookie from 'react-cookie';
const API_URL = 'http://localhost:3000';
const CLIENT_ROOT_URL = 'http://localhost:8080';
const INITIAL_STATE = { error: '', message: '', content: '', authenticated: false };

export function registerUser({ email, username, password }) {
  console.log('registerUser');
  return (dispatch) => {
    axios.post(`${API_URL}/signup`, { email, password })
    .then((response) => {
      console.log(response);
      // cookie.save('token', response.data.token, { path: '/' });
      // cookie.save('user', response.data.user, { path: '/' });
      dispatch({ type: 'USER', payload:response });
    })
    .catch((error) => {
      // errorHandler(dispatch, error.response, AUTH_ERROR);
      console.log(error);
    });
  };
}

//Login user

export const loginUser = ({ username, password }) => {
  return (dispatch) => {

    axios.post(`${API_URL}/login`, { username, password })
    .then((response) => {
      console.log(response);
      dispatch({ type: 'USER', payload:response });

    })
    .catch((error) => {
      console.log(error);
    });
  };
}




//reducer

// export default (state = INITIAL_STATE, action) => {
//   console.log(action);
//   switch (action.type) {
//     case 'auth_user':
//       return { ...state, error: '', message: '', authenticated: true };
//     case 'show_user':
// 	console.log(action) 
//       return { ...state, error: '', message: '', authenticated: true };
//     default:
//       return state
//   }
// }