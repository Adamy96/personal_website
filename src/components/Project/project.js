import React from 'react';
import './project.scss';

const Project = ({
    imgSrc,
    name,
    subname,
    stack,
    duration
}) => {
    return (
        <div className='project'>
            <img src={imgSrc} alt={'placeholder'} />

            <div className='content'>
                <p className='name'>
                    {name}
                </p>
                {
                    subname && <p className='subname'>
                        {subname}
                    </p>
                }

                <div className='stack'>
                    <p className='label'>Stack:</p>
                    <p className='text'>
                        {stack}
                    </p>
                </div>

                <div className='duration'>
                    <p>
                        <span className='label'>
                            Duration:&nbsp;
                        </span>
                        {duration}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Project;