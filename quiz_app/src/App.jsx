import React, { useState } from "react";
import Timer from "./components/Timer";
import Question from "./components/Question";
import Result from "./components/Result";

function App() {
  const [isOver, setIsOver] = useState(false);
  const [leftTime, setLeftTime] = useState(300);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);

  return (
    <div className="w-full px-4 py-10 sm:py-15">
      <div className="max-w-2xl mx-auto border-2 border-white/10 p-5 sm:p-8 rounded-2xl">
        {isOver ? (
          <Result
            score={score}
            setScore={setScore}
            setIsOver={setIsOver}
            setIndex={setIndex}
            setLeftTime={setLeftTime}
          />
        ) : (
          <>
            <Timer
              leftTime={leftTime}
              setLeftTime={setLeftTime}
              setIsOver={setIsOver}
            />
            <Question
              index={index}
              setIndex={setIndex}
              setScore={setScore}
              setIsOver={setIsOver}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
