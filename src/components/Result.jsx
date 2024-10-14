function Result(props) {
  const score = props.score;
  const isPassed = score >= 8 ? "#00ff00" : "#ff0000";
  const userAnswers = props.userAnswers;
  return (
    <>
      <h1 style={{ color: isPassed }}>{score >= 8 ? "Gratuluję, Zaliczone" : "Przykro mi, Niezaliczone"}</h1>
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
                <span>Twoja odpowiedź: </span>
                <span style={{ color: answer[2] ? "#00ff00" : "#ff0000" }} key={index}>
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
