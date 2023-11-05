import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchQuestions } from '../Redux/questionSlice';
import Timer from '../Components/Timer';
import { useNavigate } from 'react-router-dom';
import { calculateScore } from '../Redux/questionSlice';

function Quiz() {
    const questions = useSelector((state) => state.questionSlice.allQuestion)
    const loading = useSelector((state) => state.questionSlice.loading)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [questionNumber, setQuestionNumber] = useState(1)
    const handleNextQuestion = () => {
        setQuestionNumber(questionNumber+1)
        setBgChange(0)
        setSelectedAnswer("")
    }
    useEffect(() => {
        dispatch(fetchQuestions())
    }, [])

    useEffect(() => {
        if (questionNumber > 10) {
            navigate('/result');
        }
    }, [questionNumber]);

    const [selectedAnswer, setSelectedAnswer] = useState("")
    const handleAnswer = (option, correct) => {
        setSelectedAnswer(option)
        if (correct[option] === "true") {
            dispatch(calculateScore())
            console.log("Correct");
        }
        else {
            console.log("Incorrect");
        }
    }

    const [bgChange, setBgChange] = useState()
    const handleBg = (id) => {
        setBgChange(id)
    }
    
    return (
        <>
            <div className="container-fluid text-center">
                <div className='row text-center'>
                    <div className='col-6 p-3' style={{backgroundColor:"#fee1df"}}><p className='m-0 fw-semibold'><span className='fs-3'>{questionNumber}</span>/10</p></div>
                    <div className='col-6 p-3' style={{backgroundColor:"#d9fef6"}}><Timer questionNumber={questionNumber}/></div>
                </div>
            </div>
            <div className='container mt-4'>
                {
                    questions.length > 0 &&
                        <>
                            <h2>{questionNumber}. {questions[questionNumber-1]?.question}</h2>
                            <div className="mt-4">
                                {
                                    questions[questionNumber-1]?.answers.answer_a !== null &&
                                    <div className={bgChange === 1 ? `border bg-success rounded-3 text-light p-3` : `border rounded-3 p-3`} onClick={() => {handleAnswer("answer_a_correct", questions[questionNumber-1]?.correct_answers); handleBg(1)}}>
                                        A. {questions[questionNumber-1]?.answers.answer_a}
                                    </div>
                                }

                                {
                                    questions[questionNumber-1]?.answers.answer_b !== null &&
                                    <div className={bgChange === 2 ? `border bg-success rounded-3 text-light p-3 mt-2` : `border rounded-3 p-3 mt-2`} onClick={() => {handleAnswer("answer_b_correct", questions[questionNumber-1]?.correct_answers); handleBg(2)}}>
                                        B. {questions[questionNumber-1]?.answers.answer_b}
                                    </div>
                                }
                            
                                {
                                    questions[questionNumber-1]?.answers.answer_c !== null &&
                                    <div className={bgChange === 3 ? `border bg-success rounded-3 text-light p-3 mt-2` : `border rounded-3 p-3 mt-2`} onClick={() => {handleAnswer("answer_c_correct", questions[questionNumber-1]?.correct_answers); handleBg(3)}}>
                                        C. {questions[questionNumber-1]?.answers.answer_c}
                                    </div>
                                }

                                {
                                    questions[questionNumber-1]?.answers.answer_d !== null &&
                                    <div className={bgChange === 4 ? `border bg-success rounded-3 text-light p-3 mt-2` : `border rounded-3 p-3 mt-2`} onClick={() => {handleAnswer("answer_d_correct", questions[questionNumber-1]?.correct_answers); handleBg(4)}}>
                                        D. {questions[questionNumber-1]?.answers.answer_d}
                                    </div>
                                }

                                {
                                    questions[questionNumber-1]?.answers.answer_e !== null &&
                                    <div className={bgChange === 5 ? `border bg-success rounded-3 text-light p-3 mt-2` : `border rounded-3 p-3 mt-2`} onClick={() => {handleAnswer("answer_e_correct", questions[questionNumber-1]?.correct_answers); handleBg(5)}}>
                                        E. {questions[questionNumber-1]?.answers.answer_e}
                                    </div>
                                }

                                {
                                    questions[questionNumber-1]?.answers.answer_f !== null &&
                                    <div className={bgChange === 1 ? `border bg-success rounded-3 text-light p-3` : `border rounded-3 p-3`} onClick={() => {handleAnswer("answer_f_correct", questions[questionNumber-1]?.correct_answers); handleBg(1)}}>
                                        F. {questions[questionNumber-1]?.answers.answer_f}
                                    </div>
                                }
                            </div>
                        </>
                }
                <button className={selectedAnswer === "" ? `btn btn-success rounded-0 m-5 mx-auto d-block fw-semibold disabled` : `btn btn-success rounded-0 m-5 mx-auto d-block fw-semibold`} onClick={handleNextQuestion}>Next question <i class="fa-solid fa-circle-arrow-right"></i></button>
            </div>
        </>
    )
}

export default Quiz


