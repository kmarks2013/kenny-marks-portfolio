import React from 'react'

const ProjectSlide = ({data,index}) => {
    return (
        <div className='projects' >
          {
            data.map((project, projectIndex) =>
              <div>
                <p>{project.title}</p>
                <p>{project.description}</p>
                <p>{project.url}</p>
                <p>{project.demo}</p>
              </div>
            )
          }
          <p>{data[index].title}</p>
        </div>
    )
}

export default ProjectSlide
