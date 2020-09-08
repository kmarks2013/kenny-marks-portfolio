import React from 'react'

const BlogImage = ({src}) => {
    return (
        <div>
            <img className='blog-thumb' src={src} alt='img' />
        </div>
    )
}

export default BlogImage
