import React from 'react'
import BlogCard from './BlogCard'

const BlogList = ({blogs}) => {

    const renderBlogs = blogs.map(blog=>
        <BlogCard blog={blog} />
    )

    return (
        <div className='bloglist'>
            {renderBlogs}
            {/* <BlogCard blog={blogs[0]}/> */}
        </div>
    )
}

export default BlogList
