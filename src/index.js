import React from 'react';
import ReactDOM from 'react-dom';
import AuthenticationService from './helpers/AuthenticationService'

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import { request } from './helpers/request'

import 'bootstrap/dist/css/bootstrap.css';
import './index.css'

request('/auth/token')
.then((response)=>{
  AuthenticationService.setAuthState(response.data)
})

window.AuthenticationService = AuthenticationService




ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
