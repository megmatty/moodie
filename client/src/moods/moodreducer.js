const initialState = {
  mood: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        mood: state.mood + 1
      }

    default:
      return state
  }
}

export const increment = () => {
  return dispatch => {
    dispatch({
      type: 'INCREMENT'
    })
  }
}