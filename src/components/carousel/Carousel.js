import React from 'react'
import LeftArrow from './LeftArrow'
import ProjectSlide from './ProjectSlide'
import RightArrow from './RightArrow'


function Carousel() {
    return (
        <div>
            <p>
            Carousel component
            <LeftArrow/>
            <ProjectSlide/>
            <RightArrow/>
            </p>
        </div>
    )
}

export default Carousel
