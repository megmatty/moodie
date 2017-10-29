import { countKeys } from '../actions/actions';

const initialState = {
  user: 0
}

//reducer
export default (state = initialState, action) => {
  switch (action.type) {
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
    case 'USER':
      console.log('USER', action);
      console.log('USER', action.payload.data.user);
  	return {
    	...state,
    	user:action.payload.data.user
  	}
    default:
      return state
  }
}
