import React,{ Fragment, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/home/Home'
import Login from './components/login'
import Post from './components/post/Post'
import CreatePost from './components/create-post/CreatePost'
import { getUserProfile, tokenNotFound } from './store/actions/user'
import { connect } from 'react-redux'

const App = ({ user, getProfile, getLogin, history }) => {
  const token = localStorage.getItem('x-user-token')

  useEffect(() => {
    if(token){
      getProfile(history)
    }else{
      getLogin(history)
    }
  },[])

  return(
    <Router>
      {user.loading && <div>loading....</div>}
      {!user.loading && <Switch>
        {!user.data && <Route path="/" exact component={Login} />}
        {user.data && <Fragment>
          <Route path="/" exact component={Home} />
          <Route path="/post/create" exact component={CreatePost} />
          <Route path="/post/:id" exact component={Post} />
        </Fragment>}
      </Switch>}
    </Router>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user.profile
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProfile: (history) => dispatch(getUserProfile(history)),
    getLogin: (history) => dispatch(tokenNotFound(history))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App)
