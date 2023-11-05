import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setFinalTime } from '../Redux/questionSlice';

function Timer({questionNumber}) {
    const [timer, setTimer] = useState(0);
    const dispatch = useDispatch()
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
            const totalTime = `${minutes} Minutes and ${seconds} Seconds`;
            dispatch(setFinalTime(totalTime));
        }
    }, [questionNumber, timer, dispatch]);
    
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;

    


    return (
        <p className='m-0 fw-semibold fs-3'>{minutes}Min, {seconds}Sec</p>
    );
}

export default Timer;
