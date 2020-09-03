import React, {useState} from 'react'
import LeftArrow from './LeftArrow'
import ProjectSlide from './ProjectSlide'
import RightArrow from './RightArrow'


function Carousel({data}) {
    const [current, setCurrent] = useState(0)

    const goToNextSlide =() =>{
        if (current === data.length -1){
            setCurrent(0)
        } else{
            setCurrent(current+1)
        }
        console.log(current)
    }

    const goToPrevSlide = () => {
        if (current === 0){
            setCurrent(data.length-1)
        } else{
            setCurrent(current-1)
        }
        console.log(current)
    }

    const chooseProject = (index) => {
        console.log('click', index)
        setCurrent(index)
    }

    return (
        <div className='carousel'>
            <LeftArrow goToPrevSlide={goToPrevSlide}/>
            <ProjectSlide data={data} index={current} chooseProject={chooseProject}/>
            <RightArrow goToNextSlide={goToNextSlide}/>
        </div>
    )
}

export default Carousel
