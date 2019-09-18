import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  GET_FRIENDS_START,
  GET_FRIENDS_SUCCESS,
  GET_FRIENDS_FAILURE,
  ADD_FRIEND_START,
  ADD_FRIEND_SUCCESS
} from "../actions"

const inititalState = {
  friends: [],
  isLoading: false
}

export const rootReducer = (state = inititalState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return { ...state, isLoading: true }
    case LOGIN_SUCCESS:
      return { ...state, isLoading: false }
    case LOGIN_FAILURE:
      return { ...state, isLoading: false }
    case GET_FRIENDS_START:
      return {
        ...state,
        isLoading: true
      }
    case GET_FRIENDS_SUCCESS:
      return {
        ...state,
        friends: state.friends.concat(action.payload),
        isLoading: false
      }
    case GET_FRIENDS_FAILURE:
      return { ...state, isLoading: false }
    case ADD_FRIEND_START:
      return { ...state, isLoading: true }
    case ADD_FRIEND_SUCCESS:
      return {
        ...state,
        friends: [...state.friends, action.payload],
        isLoading: false
      }
    default:
      return state
  }
}
