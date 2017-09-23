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
  console.log(action);
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        mood: state.user + 1
      }
    case 'FIND_ALL':
      return {
        ...state,
        entries: action.payload.entries,
        pieData: action.moodCount
      }

    default:
      return state
  }
}

//action
export const sendEntry = (entries) => {
  console.log('hired');
  return (dispatch) => {
    axios.post(`${API_URL}/api`, {
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

//action findall
export const findAll = (entries) => {
   console.log('banana');
  return (dispatch) => {
    axios.get(`${API_URL}/entries`)
      .then((response) => {
        console.log(response);

        let moodCount = countKeys(response.data.entries, 'mood');
        console.log(moodCount);
          dispatch({
            type: 'FIND_ALL',
            payload: response.data,
            moodCount: moodCount
          })
      })
    .catch(function (error) {
      console.log(error);
    });
  }
}

function countKeys(yourArray) {
  let counter = {};
  let array = [];

//something is wrong here
  yourArray.forEach(function(obj) {
      if (obj.mood && obj.mood != '' && obj.mood.length > 0) {
        console.log(obj.mood);
        // const object = {'mood': 'happy', 'value': 45}
       for (var i = 0; i < array.length + 1; i++) {
          if (array[i] && obj.mood === array[i].mood  ) {
            array[i].value++;
            break;
          }
          if (array.length === i) {
            array.push({'mood': obj.mood, 'value': 1});
            break;
          }
       } 

      }
  });
  return array;
}
//let innerObj = array[i];
          // if (!innerObj) {
          //   return;
          // }
          // console.log(innerObj.mood);
          // if (innerObj.mood === obj.mood) {
          //   innerObj.value++;
          //   break;
          // } else if (array.length === i + 1) {
          //   array.push({'mood': obj.mood, 'value': 1});
          //   break;
          // }
// function countKeys(yourArray) {
//   let counter = {};

//   yourArray.forEach(function(obj) {
//       if (obj.mood && obj.mood != '' && obj.mood.length > 0) {
//         var key = JSON.stringify(obj.mood);
//         console.log(key);
//         counter[key] = (counter[key] || 0) + 1;
//       }
//   });
//   var op = [];
//   Object.keys(counter).forEach(function(key) {
//     var obj = {};
//     obj[key] = counter[key];
//     op.push(obj); //push newly created object in `op`array
//   });
//   console.log(op);
//   return op;
// }












