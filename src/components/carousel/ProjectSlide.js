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
                <h5>{project.description}</h5>
                <img className='project-screenshot' src={project.screenshot} alt={project.title}/>
                <ul className='project-details'>
                  {project.details.map((detail, detailIndex) =>
                    <li key={`detail-${detailIndex}`}>
                      {detail}
                    </li>
                  )}
                </ul>
                <p>{project.url}</p>
                <p>{project.demo}</p>
              </div>
            )
          }
        </div>
    )
}

export default ProjectSlide
