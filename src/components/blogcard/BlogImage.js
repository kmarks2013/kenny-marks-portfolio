import React from 'react'

const BlogImage = ({src}) => {
    return (
        <div>
            <img className='blog-thumb' width='50px' src={src} alt='img' />
        </div>
    )
}

export default BlogImage
