// import axios from 'axios';
// // import cookie from 'react-cookie';
// // import { logoutUser } from './auth';
// // import { STATIC_ERROR, FETCH_USER } from './types';
// export const API_URL = 'http://localhost:3000/api';
// export const CLIENT_ROOT_URL = 'http://localhost:8080';

// //= ===============================
// // Utility actions
// //= ===============================

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