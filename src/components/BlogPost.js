import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router-dom'

import moment from 'moment'

const BlogPost = (props) => {
  return (
    <div className="blog-post">
      <h2 className="blog-post-title">{props.blog_post.title}</h2>
      <p className="blog-post-meta">{moment(props.blog_post.created_at).format('MMMM DD, YYYY')} by <Link to={`/users/${props.blog_post.username}`}>{props.blog_post.username}</Link>
       </p>
       <p className="blog-post-labels">
         { props.blog_post.labels.map((label,id) => <Link key={id} to={`/labels/${label}`}>{label} </Link>)}
       </p>
       <hr />
      <ReactMarkdown source={props.blog_post.body} />
    </div>
  )
}

export default BlogPost
