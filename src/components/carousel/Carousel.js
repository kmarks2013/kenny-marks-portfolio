import React, {useState} from 'react'
import LeftArrow from './LeftArrow'
import ProjectSlide from './ProjectSlide'
import RightArrow from './RightArrow'


function Carousel({data}) {
    const [current, setCurrent] = useState(0)

    return (
        <div className='carousel'>
        {/* {console.log(data)} */}
            <LeftArrow/>
            <ProjectSlide data={data} index={current}/>
            <RightArrow/>
        </div>
    )
}

export default Carousel
