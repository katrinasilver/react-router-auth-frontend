import React, { Component } from 'react'
import { MoonLoader } from 'react-spinners'

import BlogPosts from './BlogPosts'

import request from '../utils/request'

class BlogPostsByUser extends Component{
  constructor(props){
    super(props)

    this.state = {
      blog_posts: [],
      loading: false
    }
  }

  componentDidMount(){
    const { username } = this.props.match.params
    this.getData(username)
  }

  componentDidUpdate(prevProps, prevState){
    const { username: oldUsername } = prevProps.match.params
    const { username: newUsername } = this.props.match.params
    if(oldUsername !== newUsername){
      this.getData(newUsername)
    }
  }

  getData = (username) => {
    this.setState({loading: true})
    
    request(`/blog_posts?username=${username}&orderDirection=desc`)
    .then(({data: {blog_posts}}) => {
      this.setState({blog_posts, loading:false})
    })
    .catch(error => {
      this.setState({loading:false})
    })
  }

  render(){
    return (
      <div className="col-md-8 blog-main">
        <h3 className="pb-3 mb-4 font-italic border-bottom">
          { `Posts for ${this.props.match.params.username}` }
        </h3>

        {
          this.state.loading ?
          <MoonLoader /> :
          <BlogPosts blog_posts={this.state.blog_posts} refreshData={() => this.getData(this.props.match.params.username)}/>
        }

        <nav className="blog-pagination">
          <a className="btn btn-outline-primary">Older</a>
          <a className="btn btn-outline-secondary disabled">Newer</a>
        </nav>

      </div>
    )
  }
}

export default BlogPostsByUser
