import React from 'react';
import Particles from '@components/Particles';
import Topbar from '@components/Topbar';
import Intro from '@components/Intro';
import MySkills from '@components/MySkills';
import MyWorks from '@components/MyWorks';
import MyHobbies from '@components/MyHobbies';
import Footer from '@components/Footer';
import './homepage.scss';

const Homepage = () => {
    return (
        <div className='homepage'>
            <Topbar />
            <Intro />
            <MySkills />
            <MyWorks />
            <MyHobbies />
            <Footer />
            {/* <Particles /> */}
        </div>
    )
}

export default Homepage;