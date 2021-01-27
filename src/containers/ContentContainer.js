import React from 'react'
import AboutMe from '../components/AboutMe'
import Portfolio from './Portfolio'
import BlogContainer from './BlogContainer'
import TwitterFeed from '../components/TwitterFeed'
import WebLinks from '../components/WebLinks'

function ContentContainer() {
    return (
        <div className='content'>
            <AboutMe/>
            <Portfolio/>
            <BlogContainer/>
            {/* <TwitterFeed/> */}
            <WebLinks />
        </div>
    )
}

export default ContentContainer
