import React, { useState, useEffect } from 'react';

function Timer({ questionNumber }) {
    const [finalTime, setFinalTime] = useState("0");
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        if (questionNumber <= 10) {
            const interval = setInterval(() => {
                setTimer(prevTimer => prevTimer + 1);
            }, 1000);
            return () => {
                clearInterval(interval);
            };
        } else {
            const minutes = Math.floor(timer / 60);
            const seconds = timer % 60;
            setFinalTime(`${minutes} Minutes and ${seconds} Seconds`);
        }
    }, [questionNumber, timer]);

    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;

    return (
        <p className='m-0 fw-semibold fs-3'>{minutes}Min, {seconds}Sec</p>
    );
}

export default Timer;
