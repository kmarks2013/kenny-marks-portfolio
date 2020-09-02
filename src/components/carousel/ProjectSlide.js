import React from 'react'

const ProjectSlide = ({data}) => {

    const itemTags = () => {
        data.forEach( item => {
            return <p>item</p>
        })
    }
    return (
        <div className='projects' >
           {itemTags()}
           <p> hi</p>
        </div>
    )
}

export default ProjectSlide
