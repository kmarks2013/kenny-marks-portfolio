import React from 'react'

const ProjectSlide = ({data,index}) => {
    return (
        <div className='projects' >
          <p>{data[index].title}</p>
        </div>
    )
}

export default ProjectSlide
