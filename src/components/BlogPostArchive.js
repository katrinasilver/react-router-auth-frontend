import React, { Component } from 'react'
import { MoonLoader } from 'react-spinners';


import BlogPosts from './BlogPosts'

import { request } from '../helpers/request'

class BlogPostArchive extends Component{
  constructor(props){
    super(props)
    this.state = {
      blog_posts: [],
      loading: false
    }
  }

  componentDidMount(){
    const { month, year } = this.props.match.params
    this.setState({loading: true})
    request(`/blog_posts?month=${month}&year=${year}&orderDirection=desc`)
    .then(({data: {blog_posts}}) => {
      this.setState({blog_posts, loading:false})
    })
  }
  componentDidUpdate(prevProps, prevState){
    if(prevProps.match.params.month !== this.props.match.params.month || prevProps.match.params.year !== this.props.match.params.year){
      const { month, year } = this.props.match.params
      this.setState({loading: true})
      request(`/blog_posts?month=${month}&year=${year}&orderDirection=desc`)
      .then(({data: {blog_posts}}) => {
        this.setState({blog_posts, loading:false})
      })
    }
  }

  getMonthName(monthNumber){
    switch(monthNumber){
      case '1': return 'January'
      case '2': return 'February'
      case '3': return 'March'
      case '4': return 'April'
      case '5': return 'May'
      case '6': return 'June'
      case '7': return 'July'
      case '8': return 'August'
      case '9': return 'September'
      case '10': return 'October'
      case '11': return 'November'
      case '12': return 'December'
      default: return ''
    }
  }
  render(){
    const { month, year } = this.props.match.params
    return (
      <div className="col-md-8 blog-main">
        <h3 className="pb-3 mb-4 font-italic border-bottom">
          { `Posts for ${this.getMonthName(month)} ${year}` }
        </h3>

        {
          this.state.loading ? <MoonLoader /> : <BlogPosts blog_posts={this.state.blog_posts}/>
        }

        <nav className="blog-pagination">
          <a className="btn btn-outline-primary">Older</a>
          <a className="btn btn-outline-secondary disabled">Newer</a>
        </nav>

      </div>
    )
  }
}

export default BlogPostArchive
