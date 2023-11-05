import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FacebookShareButton, FacebookIcon, WhatsappShareButton, WhatsappIcon } from 'react-share'

function Result() {
    const score = useSelector((state) => state.questionSlice.score)
    const time = useSelector((state) => state.questionSlice.finalTimer)
    // console.log(`time: ${time}`);
    return (
        <div className='container d-flex flex-column justify-content-center align-items-center' style={{height:'100dvh'}}>
                <h4 className='text-center fw-bold'><span style={{color:"#3b47d4"}}>Great effort! You completed in {time} and Your Score is</span></h4>
                <h1 className='text-center fw-bold'><span style={{color:"#ff5d46"}}>{score * 5} out of 50</span></h1>

                <div className="result d-flex flex-column justify-content-center align-items-center mt-5">
                    <div className='d-flex justify-content-center align-items-center text-center'>
                        <div className='ms-3 me-3 fw-semibold' style={{width:'60px',fontSize:'small'}}>
                            Correct Answer
                        </div>
                        <div className='ms-3 me-3 fw-semibold' style={{width:'60px',fontSize:'small'}}>
                            Wrong Answer
                        </div>
                        <div className='ms-3 me-3 fw-semibold' style={{width:'60px',fontSize:'small'}}>
                            Total Questions
                        </div>
                    </div>
                    <div className='d-flex justify-content-center align-items-center'>
                        <div className="right rounded-circle bg-success ms-3 me-3 mt-1 d-flex justify-content-center align-items-center fs-3 text-light fw-semibold" style={{width:'60px',height:'60px'}}>
                            {score}
                        </div>
                        <div className="wrong rounded-circle bg-danger ms-3 me-3 mt-1 d-flex justify-content-center align-items-center fs-3 text-light fw-semibold" style={{width:'60px',height:'60px'}}>
                            {10 - score}
                        </div>
                        <div className="total rounded-circle bg-primary ms-3 me-3 mt-1 d-flex justify-content-center align-items-center fs-3 text-light fw-semibold" style={{width:'60px',height:'60px'}}>
                            10
                        </div>
                    </div>
                </div>

                <Link to={'/quiz'} style={{textDecoration:'none'}}><button className='btn btn-primary fw-semibold mt-5 rounded-pill'>Restart the Quiz <i class="fa-solid fa-arrows-rotate"></i></button></Link>

                <div className='mt-5 text-center'>
                    <p className='m-0 fw-semibold'>Share Your Achievement</p>
                    <WhatsappShareButton
                        url = {'https://quiz-app-redux-lime.vercel.app/'}
                        title = {`Just scored ${score * 5} points in this challenging quiz! 🧠 Think you can beat my score? Test your knowledge and challenge yourself. Play now: `}
                        className = 'm-2'
                    >
                        <WhatsappIcon size={32} round />
                    </WhatsappShareButton>

                    <FacebookShareButton
                        url = {'https://quiz-app-redux-lime.vercel.app/'}
                        quote = {`Just scored ${score * 5} points in this challenging quiz! 🧠 Think you can beat my score? Test your knowledge and challenge yourself. Play now: `}
                        className='m-2'
                    >
                        <FacebookIcon round size={32} />
                    </FacebookShareButton>
                </div>
        </div>
    )
}

export default Result