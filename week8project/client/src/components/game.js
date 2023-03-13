import { useState, useEffect } from "react";
import QuestionCard from './questioncard'
import { decode } from 'html-entities';


const Game = (props) => {

    const [questions, setQuestions] = useState([]);
    const [questionsAnswers, setQuestionsAnswers] = useState(null)
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);

    const loadData = () => {
        // remember that this link needs to match the port number and path on backend
        fetch('http://localhost:5050/api/game')
            .then((response) => response.json())
            .then(data => {
                console.log("This is line 11", data.results);
                setQuestions(data.results);

                // final result of map will be an array of arrays, each array holds inner arrays with answers, and false ,two keyvalue pairs, answer 
                // take index and data.results
                // could shuffle in map
                let arrOfAnswers = data.results.map((arr) => {
                    
                    let tempArr = [
                    {answerText: decode(arr.incorrect_answers[0]), isCorrect: false}, 
                    {answerText: decode(arr.incorrect_answers[1]), isCorrect: false}, 
                    {answerText: decode(arr.incorrect_answers[2]), isCorrect: false},
                    {answerText: decode(arr.correct_answer), isCorrect: true}
                ]
                   
                    shuffleArray(tempArr) 
                    tempArr.push(decode(arr.question))
                    return tempArr;
                })
                // console.log(arrOfAnswers)
                // setQuestionsAndAnswers(arrOfAnswers);

                setQuestionsAnswers(arrOfAnswers);    
                console.log("questions and answers", questionsAnswers)
            })
    }


    
    useEffect(() => {
        loadData();
        // eslint-disable-next-line
    }, [])

    const shuffleArray = array => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }

    return (
        <div>
        <div className="Container">
            <div className='question-count'>
                <span>Question {currentQuestion + 1}/{questions.length}</span>
            </div>
            <div>
                {questionsAnswers && 
                <QuestionCard 
                questions={questions}
                questionsAnswers={questionsAnswers[currentQuestion]} 
                currentQuestion={currentQuestion} 
                setCurrentQuestion={setCurrentQuestion} 
                score={score}
                setScore={setScore} 
                />}
            </div>
        </div>
    </div>
    )

}

export default Game;