import React from 'react';
import Topbar from '@components/Topbar';
import Intro from '@components/Intro';
import MySkills from '@components/MySkills';
import './homepage.scss';

const Homepage = () => {
    return (
        <div className='homepage'>
            <Topbar />
            <Intro />
            <MySkills />
        </div>
    )
}

export default Homepage;