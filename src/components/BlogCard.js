import React from 'react'
import BlogInfo from './blogcard/BlogInfo'
import BlogImage from './blogcard/BlogImage'

const BlogCard = ({blog}) => {
    return (
        <div>
            ill render the whole Blog
            {console.log(blog.thumbnail)}
            <BlogInfo/>
            <BlogImage src={blog.thumbnail}/>
        </div>
    )
}

export default BlogCard
