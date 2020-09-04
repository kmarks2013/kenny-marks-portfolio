import React from 'react'
import BlogInfo from './blogcard/BlogInfo'
import BlogImage from './blogcard/BlogImage'

const BlogCard = ({blog}) => {
    return (
        <div className='blog-card'>
            <BlogInfo blog={blog}/>
            <BlogImage src={blog.thumbnail}/>
        </div>
    )
}

export default BlogCard
