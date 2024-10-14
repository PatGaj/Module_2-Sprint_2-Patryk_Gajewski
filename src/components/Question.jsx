function Question(props) {
  const checkAnswer = (...answer) => {
    props.onAnswer(answer);
  };
  const answers = props.answers;
  return (
    <>
      <div className="answers">
        <p>
          Pytanie {props.counter}: {props.text}
        </p>
        {answers.map((answer, index) => (
          <button
            id="questionButton"
            key={index}
            onClick={() => checkAnswer(`Pytanie ${props.counter}: ${props.text}`, answer.text, answer.isCorrect)}
          >
            {answer.text}
          </button>
        ))}
      </div>
    </>
  );
}

export default Question;
