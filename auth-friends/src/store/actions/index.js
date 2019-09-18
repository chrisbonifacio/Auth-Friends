import { axiosWithAuth } from "../../utils/axiosWithAuth"

export const GET_FRIENDS_START = "GET_FRIENDS_START"
export const GET_FRIENDS_SUCCESS = "GET_FRIENDS_SUCCESS"
export const GET_FRIENDS_FAILURE = "GET_FRIENDS_FAILURE"

export const getFriends = () => dispatch => {
  dispatch({ type: GET_FRIENDS_START })
  axiosWithAuth()
    .get("/friends")
    .then(res => {
      dispatch({ type: GET_FRIENDS_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: GET_FRIENDS_FAILURE })
    })
}

export const LOGIN_START = "LOGIN_START"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE = "LOGIN_FAILURE"

export const login = (credentials, ownProps) => dispatch => {
  dispatch({ type: LOGIN_START })
  console.log(ownProps)
  axiosWithAuth()
    .post("/login", credentials)
    .then(res => {
      dispatch({ type: LOGIN_SUCCESS })
      localStorage.setItem("token", res.data.payload)
      ownProps.history.push("/friends")
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAILURE })
      console.log(err)
    })
}

export const ADD_FRIEND_START = "ADD_FRIEND_START"
export const ADD_FRIEND_SUCCESS = "ADD_FRIEND_SUCCESS"
export const ADD_FRIEND_FAILURE = "ADD_FRIEND_FAILURE"

export const addFriend = friend => dispatch => {
  dispatch({ type: ADD_FRIEND_START })
  axiosWithAuth()
    .post("/friends", friend)
    .then(res => {
      dispatch({ type: ADD_FRIEND_SUCCESS, payload: res.data })
      console.log(res)
    })
    .catch(err => {
      dispatch({ type: ADD_FRIEND_FAILURE })
      console.log(err)
    })
}
