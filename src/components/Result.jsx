function Result(props) {
  const score = props.score;
  const isPassed = score >= 8 ? "green" : "red";
  const userAnswers = props.userAnswers;
  return (
    <>
      <h1 style={{ color: isPassed }}>{score >= 8 ? "Zaliczone" : "Nie Zaliczone"}</h1>
      <h3>
        Twój wynik to:
        <span style={{ color: isPassed }}> {(score * 100) / 10}%</span> ({score} z 10 poprawnych odpowiedzi)
      </h3>
      <div className="quizResult">
        {userAnswers.map((answer, index) => (
          <>
            <div className="answerResult">
              {answer[0]}
              <div>
                Twoja odpowiedź:
                <span style={{ color: answer[2] ? "green" : "red" }} key={index}>
                  {answer[1]}
                </span>
              </div>
            </div>
          </>
        ))}
      </div>

      <button onClick={props.startQuiz}>Powrót do Startu</button>
    </>
  );
}

export default Result;
