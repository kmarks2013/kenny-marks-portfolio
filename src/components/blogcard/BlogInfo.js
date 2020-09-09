import React from 'react'

const BlogInfo = ({blog}) => {
    return (
        <div className='blog-info'>
            <a href={blog.link} target='_blank'>{blog.title}</a>
            <p>{blog.pubDate}</p>
        </div>
    )
}

export default BlogInfo
