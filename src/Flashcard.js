import React, { useState } from "react";
import "./Flashcard.css";

function Flashcard(props) {
  const [showAnswer, setShowAnswer] = useState(false);

  function toggleShowAnswer() {
    setShowAnswer(!showAnswer);
  }

  return (
    <div className="flashcard">
      <div className="flashcard-content">
        <div className="flashcard-question">
          {showAnswer ? props.flashcard.answer : props.flashcard.question}
        </div>
        <button onClick={toggleShowAnswer}>
          {showAnswer ? "Show Question" : "Show Answer"}
        </button>
      </div>
    </div>
  );
}

export default Flashcard;
