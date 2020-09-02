import React from 'react'
import Carousel from '../components/carousel/Carousel'

const PROJECTS = [ 1,2,3,4 ]

function Portfolio() {
    return (
        <div id='portfolio'>
            <Carousel data={PROJECTS}/>
        </div>
    )
}

export default Portfolio
