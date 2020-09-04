import React from 'react'
import BlogInfo from './blogcard/BlogInfo'
import BlogImage from './blogcard/BlogImage'

const BlogCard = ({blog}) => {
    return (
        <div className='blog-card'>
            <BlogImage src={blog.thumbnail}/>
            <BlogInfo blog={blog}/>
        </div>
    )
}

export default BlogCard
