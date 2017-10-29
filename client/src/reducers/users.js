// //reducer
//  const INITIAL_STATE = { error: '', message: '', content: '', authenticated: false };

// export default (state = INITIAL_STATE, action) => {
//   console.log(action);
//   switch (action.type) {
//     case 'auth_user':
//       return { ...state, error: '', message: '', authenticated: true };
//     case 'show_user':
// 	console.log(action) 
//       return { ...state, error: '', message: '', authenticated: true };

//     // case UNAUTH_USER:
//     //   return { ...state, authenticated: false, error: action.payload };
//     // case AUTH_ERROR:
//     //   return { ...state, error: action.payload };
//     // case FORGOT_PASSWORD_REQUEST:
//     //   return { ...state, message: action.payload.message };
//     // case RESET_PASSWORD_REQUEST:
//     //   return { ...state, message: action.payload.message };
//     // case PROTECTED_TEST:
//     //   return { ...state, content: action.payload.message };
//     default:
//       return state
//   }
// }