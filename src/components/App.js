import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from './Login'
import Home from './Home'
import Header from './Header'
import CreateBlogPost from './CreateBlogPost'
import AuthenticatedRoute from '../higherOrderComponents/AuthenticatedRoute'

import request from '../utils/request';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      authentication: {
        pending: true,
        user: null
      }
    }
  }

  setAuthentication = claim => {
    this.setState({
      authentication : {
        pending: false,
        user: claim
      }
    })
  }

  componentDidMount(){
    request('/auth/token')
    .then(response => this.setAuthentication(response.data))
    .catch(err => this.setAuthentication(null))
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="container">
            <Header setAuthentication={this.setAuthentication} user={this.state.authentication.user}/>
          </div>
          <Switch>
            <Route path='/login' render={(props) => <Login {...props} setAuthentication={this.setAuthentication} />} />
            <AuthenticatedRoute exact path='/create' component={CreateBlogPost} authentication={this.state.authentication}/>
            <Route path='/' render={(props) => <Home {...props} user={this.state.authentication.user} />} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App
