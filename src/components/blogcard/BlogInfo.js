import React from 'react'

const BlogInfo = ({blog}) => {
    return (
        <div className='blog-info'>
            <p>{blog.title}</p>
            <p>{blog.pubDate}</p>
        </div>
    )
}

export default BlogInfo
