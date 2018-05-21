import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import AuthenticationService from './AuthenticationService'



class AuthenticatedRoute extends Component {
  constructor(props){
    super(props)
    this.state = {
      authState: AuthenticationService.getAuthState(),
      pending: true
    }
  }
  handleAuthState = (authState) => {
    this.setState({ authState, pending: false })
  }
  componentWillMount(){
    AuthenticationService.registerEvent(this.handleAuthState)
  }
  componentWillUnmount(){
    AuthenticationService.deRegisterEvent(this.handleAuthState)
  }
  render(){
    if(this.state.pending && !this.state.authState){
      return this.props.loading || <div>Loading...</div>
    }
    else {
      return this.state.authState ? <Route {...this.props} /> : <Redirect to='/' />
    }
  }
}


export default (props) => <AuthenticatedRoute {...props} />
