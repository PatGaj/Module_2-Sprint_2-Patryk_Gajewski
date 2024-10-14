import "./Question.css";
function Question(props) {
  const checkAnswer = (...answer) => {
    props.onAnswer(answer);
  };
  const answers = props.answers;
  return (
    <>
      <p>{props.text}</p>
      <div className="answers">
        {answers.map((answer, index) => (
          <button
            id="questionButton"
            key={index}
            onClick={() => checkAnswer(props.text, answer.text, answer.isCorrect)}
          >
            {answer.text}
          </button>
        ))}
      </div>
    </>
  );
}

export default Question;
