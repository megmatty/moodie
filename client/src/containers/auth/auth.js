import axios from 'axios';
import { browserHistory } from 'react-router';
import cookie from 'react-cookie';
const API_URL = 'http://localhost:3000';
const CLIENT_ROOT_URL = 'http://localhost:8080';
// import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, FORGOT_PASSWORD_REQUEST, RESET_PASSWORD_REQUEST, PROTECTED_TEST } from './types';
const INITIAL_STATE = { error: '', message: '', content: '', authenticated: false };
// import { AUTH_USER, AUTH_ERROR, UNAUTH_USER, FORGOT_PASSWORD_REQUEST, RESET_PASSWORD_REQUEST, PROTECTED_TEST } from './types';

// export const AUTH_USER = 'auth_user';

export function registerUser({ email, username, password }) {
  console.log('action called');
  return (dispatch) => {
    console.log('inside dispatch');
    axios.post(`${API_URL}/register`, { email, username, password })
    .then((response) => {
      console.log(response);
      // cookie.save('token', response.data.token, { path: '/' });
      // cookie.save('user', response.data.user, { path: '/' });
      dispatch({ type: 'auth_user' });
      // window.location.href = `${CLIENT_ROOT_URL}/dashboard`;
    })
    .catch((error) => {
      // errorHandler(dispatch, error.response, AUTH_ERROR);
      console.log(error);
    });
  };
}

//Login user
export function loginUser({ email, password }) {
  return function (dispatch) {
    axios.post(`${API_URL}/login`, { email, password })
    .then((response) => {
      // cookie.save('token', response.data.token, { path: '/' });
      // cookie.save('user', response.data.user, { path: '/' });
      dispatch({ type: 'auth_user' });
      // window.location.href = `${CLIENT_ROOT_URL}/dashboard`;
    })
    .catch((error) => {
      // errorHandler(dispatch, error.response, AUTH_ERROR);
      console.log(error);
    });
  };
}

//reducer

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case 'auth_user':
      return { ...state, error: '', message: '', authenticated: true };
    // case UNAUTH_USER:
    //   return { ...state, authenticated: false, error: action.payload };
    // case AUTH_ERROR:
    //   return { ...state, error: action.payload };
    // case FORGOT_PASSWORD_REQUEST:
    //   return { ...state, message: action.payload.message };
    // case RESET_PASSWORD_REQUEST:
    //   return { ...state, message: action.payload.message };
    // case PROTECTED_TEST:
    //   return { ...state, content: action.payload.message };
    default:
      return state
  }
}