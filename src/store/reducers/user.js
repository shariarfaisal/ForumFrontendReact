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


const initialState = {
  loading: false,
  users: null,
  errors: null,
  profile: {
    loading: true,
    data: null,
    error: null
  },
  login:{
    loading: false,
    accessToken: null,
    error: null,
    success: null
  },
  signup:{
    loading: false,
    data: null,
    error: null,
    success: null
  }
}

const reducer = (state=initialState,action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload
      }
    case FETCH_USERS_ERROR:
      return {
        ...state,
        loading: false,
        errors: action.payload
      }
    case LOGIN_REQUEST:
      return {
        ...state,
        login: {
          ...state.login,
          loading: true
        }
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        login: {
          ...state.login,
          loading: false,
          error: null,
          accessToken: action.payload,
          success: 'Login successfull!'
        }
      }
    case LOGIN_ERROR:
      return {
        ...state,
        login: {
          ...state.login,
          loading: false,
          success: null,
          error: action.payload
        }
      }
    case TOKEN_NOT_FOUND:
      return {
        ...state,
        profile:{
          ...state.profile,
          loading: false
        }
      }
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        profile:{
          ...state.profile,
          loading: false,
          data: action.payload,
          error: null
        }
      }
    case GET_PROFILE_ERROR:
      return {
        ...state,
        profile:{
          loading: false,
          data: null,
          error: action.payload
        }
      }
    case SIGNUP_REQUEST:
      return {
        ...state,
        signup:{
          ...state.signup,
          loading: true,
          success: null
        }
      }
    case SIGNUP_SUCCESS:
      return {
        ...state,
        signup:{
          ...state.signup,
          loading: false,
          data: action.payload,
          error: null,
          success: 'Account created successfully.'
        }
      }
    case SIGNUP_ERROR:
      return {
        ...state,
        signup:{
          ...state.signup,
          loading: false,
          data: null,
          error: action.payload
        }
      }
    default:
      return state
  }
}

export default reducer
