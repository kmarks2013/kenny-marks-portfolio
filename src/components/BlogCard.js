import React from 'react'
import BlogInfo from './blogcard/BlogInfo'
import BlogImage from './blogcard/BlogImage'

const BlogCard = ({blog}) => {
    return (
        <div>
            ill render the whole Blog
            {console.log(blog)}
            <BlogInfo/>
            <BlogImage/>
        </div>
    )
}

export default BlogCard
