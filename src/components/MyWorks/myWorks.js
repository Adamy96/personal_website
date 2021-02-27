import React from 'react';
import data from '@data/myWorks';
import Project from '@components/Project';
import './myWorks.scss';

const MyWorks = () => {
    return (
        <div className='myWorks'>
            <h3 className='title'>
                Projects that I worked on
            </h3>

            <div className='projectsContainer'>
                {
                    data.map((project, idx) => (
                        <Project 
                            key={idx}
                            imgSrc={project.imgSrc}
                            name={project.name}
                            subname={project.subname}
                            stack={project.stack}
                            duration={project.duration}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default MyWorks;