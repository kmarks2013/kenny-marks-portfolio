import React from 'react'
import AboutMe from '../components/AboutMe'
import Portfolio from './Portfolio'

function ContentContainer() {
    return (
        <div className='content'>
            <AboutMe/>
            <Portfolio/>
        </div>
    )
}

export default ContentContainer
