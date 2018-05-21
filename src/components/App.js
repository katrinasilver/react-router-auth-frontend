import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// import AuthenticatedRoute from '../helpers/AuthenticatedRoute'
import Login from './Login'
import Home from './Home'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/login' component={Login} />
          {/* <AuthenticatedRoute exact path='/protected' component={Protected} /> */}
          <Route path='/' component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
