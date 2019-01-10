import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import request from '../utils/request'

class Authors extends Component{
  constructor(props){
    super(props)

    this.state = {
      users: []
    }
  }

  componentDidMount(){
    this.getData()
  }

  getData = () => {
    request('/users/allUsersWithBlogPosts')
    .then((response) => {
      this.setState({ users: response.data.users })
    })
  }

  render(){
    return (
      <div className="p-3">
        <h4 className="font-italic">Authors</h4>
        <ol className="list-unstyled mb-0">
          {
            this.state.users.map((ele, id) => {
              return <li key={id}><Link to={`/users/${ele.username}`}>{ele.username}</Link></li>
            })
          }
        </ol>
      </div>
    )
  }
}

export default Authors
