import React from 'react';
import Topbar from './Topbar';
import RandomEffect from './RandomEffect';
import './intro.scss';

const Intro = () => {
    return (
        <div className='intro'>
            <Topbar />
            <RandomEffect
                message='Hello world, my name is'
                delay={2000}
                minInterval={30}
            />
            <RandomEffect
                message='Vinícius Adamy'
                delay={4000}
                minInterval={30}
            />
            <RandomEffect
                message='Frontend developer'
                delay={6000}
                minInterval={30}
            />
            <p className='description'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
        </div>
    )
}

export default Intro;