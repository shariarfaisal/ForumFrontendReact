import React from 'react'
import UsersItem from './UsersItem'
import './users.scss'
import { getUsers } from '../../store/actions/user'
import { connect } from 'react-redux'
import Layout from '../layout'

const Users = ({ users, loading }) => {
  return(
    <Layout>
      <div className="row mx-0 justify-content-center">
        <div className="col-lg-10 my-4">
          <div className="users-wrapper row mx-0 justify-content-center">
            {users && users.map((user,i) => <UsersItem key={i} {...user} />)}
          </div>
        </div>
      </div>
    </Layout>
  )
}

const mapStateToProps = state => {
  return {
    ...state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUsers: dispatch(getUsers())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Users)
