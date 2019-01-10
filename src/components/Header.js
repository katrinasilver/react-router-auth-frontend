import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { setAuthentication } from '../actions/authentication'

class Header extends Component {
  SignInSignOutButton = () => {
    if(this.props.user){ // log out
      localStorage.removeItem('token')
      this.props.setAuthentication(null)
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
              this.props.user ?
              <span style={{marginLeft: '5px'}}>
                Welcome, {this.props.user.username}
              </span> : null
            }
          </div>
          <div className="col-4 text-center">
            <Link to="/" className="blog-header-logo text-dark">g105 @ Large</Link>
          </div>
          <div className="col-4 d-flex justify-content-end align-items-center">
            {
              this.props.user ?
              <Link
                className="btn btn-sm btn-outline-secondary"
                style={{marginRight: '5px'}}
                to="/create">
                Create Blog Post
              </Link> : null
            }
            <span className="btn btn-sm btn-outline-secondary" onClick={()=>this.SignInSignOutButton()}>
              {this.props.user ? 'Sign Out' : 'Sign In'}
            </span>
          </div>
        </div>
      </header>
    )
  }
}

const mapStateToProps = state => ({
  user: state.authentication.user
})

const mapDispatchToProps = dispatch => 
  bindActionCreators({
    setAuthentication
  }, dispatch)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header))
