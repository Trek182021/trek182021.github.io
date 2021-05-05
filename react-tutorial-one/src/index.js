import React, {Component} from 'react';
import "./assets/style.css";
import ReactDOM from "react-dom";
import quizService from "./components/quizService";
import Header from "./components/Header.js";
import Content from "./components/Content.js";
import Result from "./components/Result.js";

class QuizTest extends Component {
    state = {
        questionBank: [],
        score: 0,
        clickedEvents: 0,
    };

    getQuestions = () => {
        quizService().then(question => {
            this.setState({
                questionBank: question
            });
        });
    };

    checkAnswer = (answer, correctAnswer) => {
        console.log("Passed");
        if (answer === correctAnswer) {
            this.setState({
                score: this.state.score + 1
            })
        };
        this.setState ({
            clickedEvents: this.state.clickedEvents < 5 ? this.state.clickedEvents + 1 : 5  
        })
    }
    resetGame = () => {
        this.getQuestions();
        this.setState({
            score:0,
            clickedEvents: 0
        })
    }
    componentDidMount() {
        this.getQuestions();
    }
    render() {  
        return (
            <>
                <Header />
                <div className="container">
                {this.state.questionBank.length > 0 && this.state.clickedEvents < 5 && this.state.questionBank.map(({question, answers, correct, questionId}) => 
                (<Content 
                setQuestion={question} 
                options ={answers}
                key={questionId}
                isValidElement = {answer => this.checkAnswer(answer, correct)}
                 />))}
                 {this.state.clickedEvents === 5 ? <Result score={this.state.score} reset={this.resetGame}/> : null}
                </div>
            </>        
        );
    }      
}

ReactDOM.render(<QuizTest />, document.getElementById("root"));