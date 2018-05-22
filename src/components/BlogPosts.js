import React from 'react'

import BlogPost from './BlogPost'

const BlogPosts = ({blog_posts, refreshData}) => {

  return (
    <div>
      {
        blog_posts.map(blog_post => <BlogPost key={blog_post.id} blog_post={blog_post} refreshData={refreshData}/>)
      }
    </div>

  )
}

export default BlogPosts
