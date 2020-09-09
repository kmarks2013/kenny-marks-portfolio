import React from 'react'

const BlogInfo = ({blog}) => {
    return (
        <div className='blog-info'>
            <a href={blog.link} target='_blank'>{blog.title}</a>
            <p>
                Published:{" "}
                {blog.pubDate}
            </p>
        </div>
    )
}

export default BlogInfo
