const initialState = {
  user: 0
}

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

export const increment = () => {
  return dispatch => {
    dispatch({
      type: 'INCREMENT'
    })
  }
}