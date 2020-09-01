import React from 'react'
import LeftArrow from './LeftArrow'
import ProjectSlide from './ProjectSlide'
import RightArrow from './RightArrow'


function Carousel() {
    return (
        <div className='carousel'>
            <LeftArrow/>
            <ProjectSlide/>
            <RightArrow/>
        </div>
    )
}

export default Carousel
