import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { request } from '../helpers'

class Labels extends Component {
  constructor(props){
    super(props)
    this.state = {
      labels: []
    }
  }
  componentDidMount(){
    request(`/labels?limit=12`)
    .then(({data: { labels } }) => {
      this.setState({ labels })
    })
  }
  render(){
    return (
      <div className="nav-scroller py-1 mb-2">
        <nav className="nav d-flex justify-content-between">
          {
            this.state.labels.map((ele,id) =>
            <Link key={id} className="p-2 text-muted" to={`/labels/${ele.label_text}`}>
              {ele.label_text}
            </Link> )
          }
        </nav>
      </div>
    )
  }
}

export default Labels
