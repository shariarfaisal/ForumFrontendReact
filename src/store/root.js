import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools  } from 'redux-devtools-extension'
import userReducer from './reducers/user'
import thunk from 'redux-thunk'

const store = createStore(
  combineReducers({
    user: userReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
