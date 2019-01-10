import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Login from './Login'
import Home from './Home'
import Header from './Header'
import CreateBlogPost from './CreateBlogPost'
import AuthenticatedRoute from '../higherOrderComponents/AuthenticatedRoute'

import { setAuthentication } from '../actions/authentication'
import request from '../utils/request';

class App extends Component {
  componentDidMount(){
    request('/auth/token')
    .then(response => this.props.setAuthentication(response.data))
    .catch(err => this.props.setAuthentication(null))
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="container">
            <Header />
          </div>
          <Switch>
            <Route path='/login' component={Login} />
            <AuthenticatedRoute exact path='/create' component={CreateBlogPost} />
            <Route path='/' component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    setAuthentication
  }, dispatch)

export default connect(null, mapDispatchToProps)(App)
