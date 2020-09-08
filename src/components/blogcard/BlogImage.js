import React from 'react'

const BlogImage = ({src}) => {
    return (
        <>
            <img className='blog-thumb' src={src} alt='img' />
        </>
    )
}

export default BlogImage
