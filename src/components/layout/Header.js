import React from 'react'
import { Link } from 'react-router-dom'

const getLogout = (e) => {
  localStorage.removeItem('x-user-token')
  window.location = '/'
}

function Header(props) {
  return(
    <div className="header d-flex justify-content-center fixed-top shadow-sm bg-light">
      <ul className="nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            <i className="bx bx-home icon"></i>
            <span>Home</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/post/new" className="nav-link">
            <i className="bx bx-plus icon"></i>
            <span>New</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/users" className="nav-link">
            <i className="bx bx-group icon"></i>
            <span>Users</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/profile" className="nav-link">
            <i className="bx bx-user icon"></i>
            <span>Profile</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/profile/posts" className="nav-link">
            <i className="bx bx-notepad icon"></i>
            <span>My Posts</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link onClick={getLogout} to="/" className="nav-link text-danger">
            <i className="bx bx-log-out icon"></i>
            <span>Logout</span>
          </Link>
        </li>
      </ul>
    </div>
  )
}
export default Header
