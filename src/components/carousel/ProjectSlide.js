import React from 'react'

const ProjectSlide = ({data}) => {
    return (
        <div className='projects' >
            {data.map(item => {
                return <p>{item}</p>
            })}
        </div>
    )
}

export default ProjectSlide
