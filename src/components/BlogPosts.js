import React from 'react'

import BlogPost from './BlogPost'

const BlogPosts = ({blog_posts, user, refreshData}) => {

  return (
    <div>
      {
        blog_posts.map(blog_post => <BlogPost key={blog_post.id} blog_post={blog_post} user={user} refreshData={refreshData}/>)
      }
    </div>

  )
}

export default BlogPosts
