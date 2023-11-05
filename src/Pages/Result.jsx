import React from 'react'
import { useSelector } from 'react-redux'

function Result() {
    const score = useSelector((state) => state.questionSlice.score)
    return (
        <div>{score}</div>
    )
}

export default Result