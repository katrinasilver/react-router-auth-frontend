import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="blog-header py-3">
      <div className="row flex-nowrap justify-content-between align-items-center">
        <div className="col-4 pt-1">
          <Link className="btn btn-sm btn-outline-secondary" to="/">Sign up</Link>
        </div>
        <div className="col-4 text-center">
          <Link to="/" className="blog-header-logo text-dark">g82 @ Large</Link>
        </div>
        <div className="col-4 d-flex justify-content-end align-items-center">
          <Link className="btn btn-sm btn-outline-secondary" to="/login">Sign in</Link>
        </div>
      </div>
    </header>
  )
}

export default Header
