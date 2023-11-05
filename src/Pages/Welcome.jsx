import React from 'react'
import { Link } from 'react-router-dom'

function Welcome() {
    return (
        <div className='container mt-5 mb-5'>
            <div className='ms-1 me-1'>
                <h1 className='text-center fw-bold'>Welcome to <span style={{color:"#3b47d4"}}>Quizzy</span><span style={{color:"#ff5d46"}}>Mind!</span></h1>
                <div className="row mt-5 gap-3 mb-3">
                    <div className="col-sm-12 col-md container-fluid instruction-1 p-3 rounded-4" style={{backgroundColor:"#d9fef6"}}>
                        <span className='fw-bold' style={{color:"#00d6a3"}}>1. Answer 10 Exciting Questions</span>
                        <p>We've prepared 10 awesome questions covering a variety of categories and difficulty levels. Get ready to test your knowledge and have a great time!</p>
                    </div>
                    <div className="col-sm-12 col-md container-fluid instruction-1 p-3 rounded-4" style={{backgroundColor:"#f7e0e8"}}>
                        <span className='fw-bold' style={{color:"#942f53"}}>2. Take Your Time</span>
                        <p>No need to rush! Answer at your own pace. The timer is there just to let you know how long you took to complete the quiz. So, relax, think it through, and enjoy the journey!</p>
                    </div>
                </div>
                <div className="row gap-3 mb-3">
                    <div className="col-sm-12 col-md container-fluid instruction-1 p-3 rounded-4" style={{backgroundColor:"#fee1df"}}>
                        <span className='fw-bold' style={{color:"#f5675c"}}>3. Score Points and Learn</span>
                        <p>For each correct answer, you'll earn points. Challenge yourself to see how many you can get right! Even if you don't know the answer, you'll learn something new - that's the spirit of quizzing!</p>
                    </div>
                    <div className="col-sm-12 col-md container-fluid instruction-1 p-3 rounded-4" style={{backgroundColor:"#e0eeef"}}>
                        <span className='fw-bold' style={{color:"#366b70"}}>4. Discover Your Score</span>
                        <p>After answering all the questions, your total score out of 10 will be revealed. See how well you did and celebrate your achievements!</p>
                    </div>
                </div>
                <div className="row gap-3 mb-3">
                    <div className="col-sm-12 col-md container-fluid instruction-1 p-3 rounded-4" style={{backgroundColor:"#FFFFCC"}}>
                        <span className='fw-bold' style={{color:"#FFAE00"}}>5. Play Again and Share the Fun</span>
                        <p>Loved the quiz? Play again to beat your own score! Don't forget to share this exciting quiz experience with your friends and family. Challenge them to see who's the ultimate quiz champion!</p>
                    </div>
                    <div className="col-sm-12 col-md container-fluid instruction-1 p-3 rounded-4" style={{backgroundColor:"#feefc8"}}>
                        <span className='fw-bold' style={{color:"#9c704d"}}>6. Have Fun and Learn</span>
                        <p>Our quiz is not just about points; it's about having a blast and expanding your knowledge. So, dive in, enjoy the quiz, and let the learning and laughter begin!</p>
                    </div>
                </div>
    
                <Link to={"/quiz"} style={{textDecoration:"none"}}><button className='btn fw-semibold btn-primary rounded-pill mx-auto d-block m-4 mt-5 w-50'>Let's Play!</button></Link>
            </div>
        </div>
    )
}

export default Welcome