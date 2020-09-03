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
                <h2>{project.title}</h2>
                <h6>{project.description}</h6>
                <p>{project.url}</p>
                <p>{project.demo}</p>
                <ul className='project-details'>
                  {project.details.map((detail, detailIndex) =>
                    <li key={`detail-${detailIndex}`}>
                      {detail}
                    </li>
                  )}
                </ul>
              </div>
            )
          }
        </div>
    )
}

export default ProjectSlide
