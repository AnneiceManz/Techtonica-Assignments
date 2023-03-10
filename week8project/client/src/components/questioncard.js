import { decode } from 'html-entities'

const QuestionCard = ({amount, result, score, setScore, questionNum, setQuestionNumber}) => {

  //Decode questions
  const question = decode(result.question);

  //Create new array of choices from correct and incorrect answers
  let answers = [result.correct_answer, ...result.incorrect_answers];

  //decode answer choices
  answers = answerChoices.map((answer) => decode(answer))

  //create decoded correct answer variable
  const correct_answer = answers[0]

  //shuffle answers array
  const shuffledAnswers = answers.sort((a,b) => 0.5 - Math.random());

  const handleUserAnswer = (e) => {
    if (shuffledAnswers[e.target.value] === correct_answer) {
      setScore(score + 1);
      setQuestionNumber(questionNum +1);
      e.target.checked = false
    }
  }
    
    return (
      <div className={"question-section"}>
        <div className='question-text'>{decode(props.question.question)}</div>
        <div className='answer-section'>
		<button>True</button>
		<button>False</button>
        </div>
      </div>
    );
  };

export default QuestionCard;