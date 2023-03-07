import { useState, useEffect } from "react";
import QuestionCard from "./questioncard";

const Game = (props) => {

    const [questions, setQuestions] = useState([]);

    const loadData = () => {
        //Needed to remember to change the path in my request from the server
        fetch('https://opentdb.com/api.php?amount=15&category=32&difficulty=easy&type=multiple')
            .then((response) => response.json())
            .then(data => {
                console.log("This is line 11", data.results);
                setQuestions(data.results);
            })
    }

    useEffect(() => {
        loadData();
    }, [])

    return (
        <div className="Container">
            <div className='question-count'>
                <span>Question 1</span>/{questions.length}
            </div>
            {questions.map((question, index) => {
                return <QuestionCard key={index} question={question} />
            })}
        </div>
    )

}

export default Game;
