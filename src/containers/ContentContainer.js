import React from 'react'
import AboutMe from '../components/AboutMe'
import Portfolio from './Portfolio'
import BlogContainer from './BlogContainer'

function ContentContainer() {
    return (
        <div className='content'>
            <AboutMe/>
            <Portfolio/>
            <BlogContainer/>
        </div>
    )
}

export default ContentContainer
