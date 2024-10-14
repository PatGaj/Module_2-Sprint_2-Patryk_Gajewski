import { useState } from "react";
import "./App.css";
import Question from "./components/Question";
import Start from "./components/Start";
import { QUESTIONS } from "./quizQuestions";
import Result from "./components/Result";
let counter = 0;
const userAnswers = [];
function App() {
  const [question, setQuestion] = useState(QUESTIONS[counter]);
  const [score, setScore] = useState(0);
  const [condition, setCondition] = useState("start");
  const startQuiz = () => {
    setCondition("quiz");
    userAnswers.length = 0;
    counter = 0;
    setQuestion(QUESTIONS[counter]);
    setScore(0);
  };
  const getUserAnswer = (childAnswer) => {
    userAnswers.push(childAnswer);
    if (childAnswer[2]) {
      setScore(score + 1);
    }
    if (QUESTIONS.length - 1 > counter) {
      setQuestion(QUESTIONS[++counter]);
    } else {
      setCondition("result");
    }
  };

  return (
    <>
      {condition === "start" && <Start startQuiz={startQuiz} />}
      {condition === "quiz" && <Question {...question} onAnswer={getUserAnswer} />}
      {condition === "result" && (
        <Result userAnswers={userAnswers} score={score} startQuiz={() => setCondition("start")} />
      )}
    </>
  );
}

export default App;
