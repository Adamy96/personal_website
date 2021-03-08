import React from 'react';
import './particles.scss';

const Particles = () => {
    const spans = new Array(50).fill('');

    return (
        <div className='particles'>
            {spans.map((current, idx) => (
                <span key={idx}></span>
            ))}
        </div>
    )
}

export default Particles;