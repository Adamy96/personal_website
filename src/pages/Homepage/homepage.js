import React from 'react';
import Topbar from '@components/Topbar';
import Intro from '@components/Intro';
import MySkills from '@components/MySkills';
import MyWorks from '@components/MyWorks';
import './homepage.scss';

const Homepage = () => {
    return (
        <div className='homepage'>
            <Topbar />
            <Intro />
            <MySkills />
            <MyWorks />
        </div>
    )
}

export default Homepage;