import React from 'react'
import ReactMarkdown from 'react-markdown'
import moment from 'moment'
import { Link } from 'react-router-dom'

import request from '../utils/request'


const BlogPost = ({ blog_post, user, refreshData }) => {
  const { id, users_id, title, created_at, username, labels, body } = blog_post;

  const remove = (id) => {
    request(`/blog_posts/${id}`, 'delete')
    .then(response => {
      refreshData()
    })
  }

  return (
    <div className="blog-post">
      <div>
        <h1 style={{display:'inline'}} className="blog-post-title">{title}</h1>
        {
          user && user.id === users_id ?
          <span className="float-right" >
            <span className="btn btn-md btn-secondary" style={{marginRight:'5px'}}>Edit</span>
            <span
              onClick={() => remove(id)}
              className="btn btn-md btn-danger">
              Delete
            </span>
          </span> : null
        }
      </div>
      <p className="blog-post-meta">{moment(created_at).format('MMMM DD, YYYY')} by <Link to={`/users/${username}`}>{username}</Link>
       </p>
       <p className="blog-post-labels">
         { labels.map((label,id) => <Link key={id} to={`/labels/${label}`}>{label} </Link>)}
       </p>
       <hr />
      <ReactMarkdown source={body} />
    </div>
  )
}

export default BlogPost
