import { useState } from 'react';

const QuestionCard = (props) => {
    const [disable, setDisable] = useState(false)
    console.log(props.questionsAnswers, "inside question.js")
    
    const handleAnswerClick = (e) => {
        
    const nextQuestion = props.currentQuestion + 1;
    if (nextQuestion < props.questions.length) {
                props.setCurrentQuestion(nextQuestion);
            } else {
                setDisable(true);
                // alert('This is the end of the quiz!');
            }   
    if (props.questionsAnswers[e.target.value].isCorrect === true) {
            props.setScore +1
      }
}
    
    return (
    <div>{disable ? <div className="score-section">You score: {props.score}/15</div> :
        <div className="question-section">
            <div className="question-text">
                <h1>{props.questionsAnswers[4]}</h1>
            </div>
            <div className='answer-section'>   
            {// eslint-disable-next-line
                props.questionsAnswers.map((currArray, index) => {
                    if(index!==4) {
                return  <button 
           onClick={handleAnswerClick}
           key={index} type="button" value={index}>
            {currArray.answerText}
            </button>
                }
            })}
        </div> 
    </div>}
</div>
    )
}

export default QuestionCard;