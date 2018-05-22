import axios from 'axios'
import AuthenticationService from './AuthenticationService'


export default function request(path, method = 'get', body = null) {
  let bearerToken = ''
  const token = localStorage.getItem('token')

  if(token){
    bearerToken = `Bearer ${token}`
  }

  return axios(`${process.env.REACT_APP_BACKEND}${path}`, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': bearerToken
    },
    data: body
  })
  .catch(function(error){
    if(error.response.status === 401){
      AuthenticationService.setAuthState(null)
    }
    return Promise.reject()
  })
}
