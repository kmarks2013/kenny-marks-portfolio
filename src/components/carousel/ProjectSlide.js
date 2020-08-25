import React from 'react'

const ProjectSlide = ({data,index}) => {
    return (
        <div className='projects' >
          {
            data.map((project, projectIndex) =>
              <div 
                className={projectIndex === index ? "active-project" : 'inactive-projects'}
                key={projectIndex}
              >
                <p>{project.title}</p>
                <p>{project.description}</p>
                <p>{project.url}</p>
                <p>{project.demo}</p>
                <ul>
                  {project.details.map(detail => {
                    return <li>{detail}</li>
                  })}
                </ul>
              </div>
            )
            {console.log('hi')}
          }
        </div>
    )
}

export default ProjectSlide
