import React from 'react';
import SkillBar from '@components/SkillBar';
import { 
    mySkills1,
    mySkills2
} from '@data/mySkills';
import './mySkills.scss'

const MySkills = () => {
    return (
        <div className='mySkills'>
            <h3 className='title'>
                Wanna know me more?
            </h3>

            <div className='container'>
                <div className='topSkills_1'>
                    <p className='subtitle'>
                        Top Skills
                    </p>
                    {
                        mySkills1.map((skill, idx) => (
                            <SkillBar
                                key={idx}
                                label={skill.label}
                                percentage={skill.percentage}
                            />
                        ))
                    }
                </div>
                <div className='topSkills_2'>
                    <p className='subtitle'>
                        Also worked with
                    </p>
                    {
                        mySkills2.map((skill, idx) => (
                            <SkillBar
                                key={idx}
                                label={skill.label}
                                percentage={skill.percentage}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default MySkills;