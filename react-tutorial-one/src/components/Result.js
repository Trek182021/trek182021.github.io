import React from 'react'

const Result = ({score,reset}) => {
    return (
        <div className="result">
            <h1>Your score is: {score}</h1>
            <button class="btn" onClick={reset}>Play again!</button>
        </div>
    )
}

export default Result
