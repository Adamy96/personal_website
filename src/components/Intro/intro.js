import React from 'react';
import Topbar from './Topbar';
import RandomEffect from './RandomEffect';
import './intro.scss';

const Intro = () => {
    return (
        <div>
            <Topbar />
            <RandomEffect
                message='Hello world, my name is'
                delay={2000}
                minInterval={30}
            />
            <RandomEffect
                message='Frontend developer'
                delay={4000}
                minInterval={30}
            />
        </div>
    )
}

export default Intro;