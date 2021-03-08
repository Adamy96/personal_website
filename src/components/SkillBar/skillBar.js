import React from 'react';
import './skillBar.scss';

const SkillBar = ({ label, percentage }) => {
    return (
        <div className='skillBar'>
            {label && <p className='label'>
                {label}
            </p>}
            <div className='bar'>
                <div 
                    className='filler'
                    style={{ clipPath: `polygon(
                        0 0,
                        ${percentage}% 0,
                        ${percentage-5}% 100%,
                        0 100%)
                    ` }}
                >
                    <span></span>
                </div>
            </div>
        </div>
    )
}

export default SkillBar;