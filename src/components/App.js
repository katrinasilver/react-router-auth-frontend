import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { AuthenticatedRoute } from '../helpers'
import Login from './Login'
import Home from './Home'
import Header from './Header'
import CreateBlogPost from './CreateBlogPost'

class App extends Component {
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

export default App;
