import React from 'react'

import BlogPost from './BlogPost'

const BlogPosts = ({blog_posts}) => {

  return (
    <div>
      {
        blog_posts.map(blog_post => <BlogPost key={blog_post.id} blog_post={blog_post}/>)
      }
    </div>

  )
}

export default BlogPosts
