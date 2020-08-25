import React, {useState} from 'react'
import LeftArrow from './LeftArrow'
import ProjectSlide from './ProjectSlide'
import RightArrow from './RightArrow'


function Carousel({data}) {
    const [current, setCurrent] = useState(0)

    const goToNextSlide =() =>{
        console.log('click')
    }

    const goToPrevSlide = () => {
        console.log('click')
    }

    return (
        <div className='carousel'>
            <LeftArrow goToPrevSlide={goToPrevSlide}/>
            <ProjectSlide data={data} index={current}/>
            <RightArrow goToNextSlide={goToNextSlide}/>
        </div>
    )
}

export default Carousel
