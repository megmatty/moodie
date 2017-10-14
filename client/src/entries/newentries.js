import axios from 'axios';
import * as io from 'socket.io-client'; 
var socket = io('http://localhost:3000'); 
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
        pieData: action.moodCount,
        barData: action.barData
      }
    case 'REALTIME_REFRESH':
      console.log(action);
      console.log('pineapple');
      let pieData = countKeys(action.payload, "mood", state.pieData.map(a => ({...a})));
      let barData = countKeys(action.payload, "activity", state.barData.map(a => ({...a})));
      console.log(barData);
      return {
        ...state,
        pieData: pieData,
        barData: barData
      }
    default:
      return state
  }
}

export const refreshData = () => {
  return (dispatch) => {
    console.log('mango');
    socket.removeListener('new entry');
    socket.on('new entry', function(response) {
      console.log('peach');
      // console.log(response);
      dispatch({
        type: 'REALTIME_REFRESH',
        payload: [response]
      })
    });
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
        socket.emit('add entry', entries);

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
    axios.get(`${API_URL}/dashboard`)
      .then((response) => {
        console.log(response);

        let moodCount = countKeys(response.data.entries, "mood");
        let barData = countKeys(response.data.entries, "activity");
        console.log(moodCount);
          dispatch({
            type: 'FIND_ALL',
            payload: response.data,
            moodCount: moodCount,
            barData: barData
          })
      })
    .catch(function (error) {
      console.log(error);
    });
  }
}

function countKeys(yourArray, key, array=[]) {
  // let array = [];
  console.log(yourArray);
//something is wrong here
  yourArray.forEach(function(obj) {
      if (obj[key] && obj[key] !== '' && obj[key].length > 0) {
        // const object = {'mood': 'happy', 'value': 45}
       for (var i = 0; i < array.length + 1; i++) {
          if (array[i] && obj[key] === array[i][key]  ) {
            array[i].value++;
            break;
          }
          if (array.length === i) {
            array.push({[key]: obj[key], 'value': 1});
            break;
          }
       } 

      }
  });
  console.log(array);
  return array;
}

function createBarData(entries, array=[]) {
  console.log(entries);
  countKeys(entries, "activity");
}










