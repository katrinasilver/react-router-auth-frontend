import React, { Component } from 'react'
import { MoonLoader } from 'react-spinners'

import BlogPosts from './BlogPosts'

import { request } from '../helpers'

class BlogPostsByLabel extends Component{
  constructor(props){
    super(props)

    this.state = {
      blog_posts: [],
      loading: false
    }
  }

  componentDidMount(){
    const { label } = this.props.match.params
    this.getData(label)
  }

  componentDidUpdate(prevProps, prevState){
    const { label: oldLabel } = prevProps.match.params
    const { label: newLabel } = this.props.match.params
    if(oldLabel !== newLabel){
      this.getData(newLabel)
    }
  }

  getData = (label) => {
    this.setState({loading: true})
    request(`/blog_posts?label=${label}&orderDirection=desc`)
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
          { `Posts for ${this.props.match.params.label}` }
        </h3>
        {
          this.state.loading ?
          <MoonLoader /> :
          <BlogPosts
            blog_posts={this.state.blog_posts}
            refreshData={()=>this.getData(this.props.match.params.label)}/>
        }
        <nav className="blog-pagination">
          <a className="btn btn-outline-primary">Older</a>
          <a className="btn btn-outline-secondary disabled">Newer</a>
        </nav>
      </div>
    )
  }
}

export default BlogPostsByLabel
