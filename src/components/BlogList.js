import React from 'react'
import BlogCard from './BlogCard'

const BlogList = ({blogs}) => {

    const renderBlogs = blogs.map(blog=> {
        console.log(blog)
    })

    return (
        <div>
            all blogs will render here!
            <BlogCard blog={blogs[0]}/>
        </div>
    )
}

export default BlogList
