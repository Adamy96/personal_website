import React from 'react';
import socialMedia from '@data/socialMedia';
import './footer.scss';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                {socialMedia.map((media, idx) => (
                    <a target='_blank' href={media.href} key={idx}>
                        {<media.icon />}
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Footer;