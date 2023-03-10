import { decode } from 'html-entities'

const QuestionCard = (props) => {

  //Decode questions
  const question = decode(props.question.question);

  //Create new array of choices from correct and incorrect answers
  let answers = [props.question.correct_answer, ...props.question.incorrect_answers];

  //decode answer choices
  answers = answers.map((answer) => decode(answer))

  //create decoded correct answer variable
  const correct_answer = answers[0]

  //shuffle answers array
  const shuffledAnswers = answers.sort((a,b) => 0.5 - Math.random());

  const handleUserAnswer = (e) => {
    if (shuffledAnswers[e.target.value] === correct_answer) {
      props.setScore(props.score + 1);
      props.setQuestionNumber(props.questionNum +1);
      e.target.checked = false
    }
  }
    
    return (
      <div className={"question-section"}>
        <h3>{question}</h3>
        <div className="answers">
          <form>
            <button onChange={handleUserAnswer}>{shuffledAnswers[0]}</button>
            <button onChange={handleUserAnswer}>{shuffledAnswers[1]}</button>
            <button onChange={handleUserAnswer}>{shuffledAnswers[2]}</button>
            <button onChange={handleUserAnswer}>{shuffledAnswers[3]}</button>
          </form>
        </div>
      </div>
    );
  };

export default QuestionCard;