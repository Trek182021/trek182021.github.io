import React,{isValidElement, useState} from 'react'
import "../assets/style.css";

const Content = ({setQuestion,options, isValidElement}) => {
    const [answer, setAnswer] = useState(options);
    const [buttonTest, setButton] = useState(false);

    return (
        <div className="question-box">
            <h2>{setQuestion}</h2>
            {answer.map((text,index) => (<button disabled = {buttonTest} className="btn" onClick={() => {setAnswer([text]); isValidElement(text); setButton(true)}}>{text}</button>))}
        </div>
    )
}

export default Content
