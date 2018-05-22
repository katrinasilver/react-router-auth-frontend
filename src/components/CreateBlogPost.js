import React, { Component } from 'react'
import { request } from '../helpers'
import { withRouter } from 'react-router-dom'

class CreateBlogPost extends Component {
  constructor(props){
    super(props)

    this.state = {
      labels: []
    }
  }

  componentDidMount(){
    request(`/labels?limit=12`)
    .then(({data: { labels } }) => {
      this.setState({ labels: labels.map(label=>({...label, selected: false})) })
    })
  }
  selectLabel = (id) => {
    this.setState({ labels: this.state.labels.map(label =>
      label.id === id ? {...label, selected:!label.selected} : {...label })
    })
  }

  cancel = () => {
    this.props.history.push('/')
  }

  handleSubmit = (event) => {
    event.preventDefault()
    request('/blog_posts','post', {
      title: event.target.title.value,
      body: event.target.body.value,
      labelIds: this.state.labels.filter(label => label.selected).map(label => label.id)
    })
    .then(response => {
      this.props.history.push('/')
    })
  }
  render(){
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Blog Title</label>
            <input name="title" type="text" className="form-control" id="exampleFormControlInput1" />
          </div>
          <div className="nav-scroller py-1 mb-2">
            <nav className="nav d-flex justify-content-between">
              {
                this.state.labels.map((ele,id) =>
                  <span
                    key={id}
                    className={`p-2 ${ele.selected ? 'blog-post-label': ''}`}
                    to={`/labels/${ele.label_text}`}
                    onClick={() => this.selectLabel(ele.id)}
                  >
                    {ele.label_text}
                  </span>
                )
              }
            </nav>
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Blog Body</label>
            <textarea  name="body" className="form-control" id="exampleFormControlTextarea1" rows="35"></textarea>
          </div>
          <div>
            <input type='submit' value="Create Post" className="btn btn-primary" />
            <button
              className="btn btn-danger"
              style={{marginLeft:'5px'}}
              onClick={() => this.cancel()} >
              Cancel
            </button>
          </div>
        </form>
      </div>
    )
  }
}


export default withRouter(CreateBlogPost)
