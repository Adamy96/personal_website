import React, { useEffect, useState, useRef } from 'react';
import './randomEffect.scss';

const RandomEffect = ({
    message,
    minInterval,
    delay,
    className = ''
}) => {
    const [finalMessage, setFinalMessage] = useState('');
    const arrMessage = message.split('');
    const finalMessageRef = useRef(finalMessage);
    finalMessageRef.current = finalMessage;

    useEffect(() => {
        buildMessage(delay);
    }, []);

    const buildMessage = (delay) => {
        const randomLetters = 'abcdefghijklmnopqrstuvwxyz'.split('');

        setTimeout(() => {
            // if (message[finalMessageRef.current.length] !== ' ') {
            //     setFinalMessage(finalMessageRef.current + randomLetters[Math.floor(Math.random() * 26)]);
            // } else {
            //     setFinalMessage(finalMessageRef.current + ' ');
            // }
            setFinalMessage(finalMessageRef.current + arrMessage[finalMessageRef.current.length]);

            if (finalMessageRef.current.length !== message.length) {
                setTimeout(() => {
                    buildMessage(0);
                }, minInterval + Math.random() * 20);
            }

        }, delay);
    };

    return (
        <p className={className ? className : 'randomEffect_text'}>
            {finalMessage}
        </p>
    )
}

export default RandomEffect;