function Start(props) {
  return (
    <>
      <p style={{ fontSize: "32px", color: "#00ff00", fontWeight: "900" }}>JavaScript QUIZ</p>
      <button onClick={props.startQuiz}>START QUIZ</button>
    </>
  );
}

export default Start;
