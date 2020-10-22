import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  GET_PROFILE_ERROR,
  GET_PROFILE_SUCCESS,
  TOKEN_NOT_FOUND,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR
} from '../types/user'
import axios from 'axios'


export const fetchUsersRequest = () => {
  return{
    type: FETCH_USERS_REQUEST
  }
}

export const fetchUsersSuccess = data => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: data
  }
}

export const fetchUsersError = error => {
  return {
    type: FETCH_USERS_ERROR,
    payload: error
  }
}


export const getUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest())
    axios.get('/user')
      .then(res => {
        dispatch(fetchUsersSuccess(res.data))
      })
      .catch(err => {
        if(err.response && err.response.data){
          dispatch(fetchUsersError(err.response.data))
        }
      })
  }
}

export const getUserProfile = (history) => {
  return (dispatch) => {
    axios.get('/user/profile')
      .then(res => {
        dispatch({
          type: GET_PROFILE_SUCCESS,
          payload: res.data
        })
      })
      .catch(err => {
        dispatch({
          type: GET_PROFILE_ERROR,
          payload: err.response.data
        })
        localStorage.removeItem('x-user-token')
      })
  }
}

export const getLogin = (data) => {
  return (dispatch) => {
    dispatch({type: LOGIN_REQUEST })
    axios.post('/user/signin',data)
      .then(res => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data.accessToken
        })
        localStorage.setItem('x-user-token','Bearer '+res.data.accessToken)
        setTimeout(() => {
          window.location = '/'
        },1000)
      })
      .catch(err => {
        console.log(err.response);
        if(err.response.status === 400){
          dispatch({
            type: LOGIN_ERROR,
            payload: err.response.data
          })
        }
      })
  }
}

export const getSignup = (data) => {
  return dispatch => {
    dispatch({ type: SIGNUP_REQUEST })
    axios.post('/user/signup',data)
      .then(res => {
        dispatch({
          type: SIGNUP_SUCCESS,
          payload: res.data
        })
      })
      .catch(err => {
        if(err.response && err.response.status && err.response.status === 400){
          dispatch({
            type: SIGNUP_ERROR,
            payload: err.response.data
          })
        }
      })
  }
}

export const tokenNotFound = (history) => {
  return (dispatch) => {
    dispatch({
      type: TOKEN_NOT_FOUND
    })
  }
}
