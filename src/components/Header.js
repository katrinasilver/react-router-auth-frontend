import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { withAuthentication, AuthenticationService } from '../helpers'

class Header extends Component {
  SignInSignOutButton = () => {
    if(this.props.authState){ // log out
      localStorage.removeItem('token')
      AuthenticationService.setAuthState(null)
    }
    else {
      this.props.history.push('/login')
    }
  }
  render(){
    return (
      <header className="blog-header py-3">
        <div className="row flex-nowrap justify-content-between align-items-center">
          <div className="col-4 pt-1">
            <Link className="btn btn-sm btn-outline-secondary" to="/">Sign up</Link>
            {
              this.props.authState ?
              <span style={{marginLeft: '5px'}}>
                Welcome, {this.props.authState.username}
              </span> : null
            }
          </div>
          <div className="col-4 text-center">
            <Link to="/" className="blog-header-logo text-dark">g82 @ Large</Link>
          </div>
          <div className="col-4 d-flex justify-content-end align-items-center">
            {
              AuthenticationService.getAuthState() ?
              <Link
                className="btn btn-sm btn-outline-secondary"
                style={{marginRight: '5px'}}
                to="/create">
                Create Blog Post
              </Link> : null
            }
            <span className="btn btn-sm btn-outline-secondary" onClick={()=>this.SignInSignOutButton()}>
              {this.props.authState ? 'Sign Out' : 'Sign In'}
            </span>
          </div>
        </div>
      </header>
    )
  }
}

export default withRouter(withAuthentication(Header))
