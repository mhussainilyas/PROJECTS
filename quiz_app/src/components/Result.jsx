import React from "react";

function Result({ score, setIndex, setLeftTime, setScore, setIsOver }) {
  function handleStartAgain() {
    setIndex(0);
    setLeftTime(300);
    setScore(0);
    setIsOver(false);
  }

  return (
    <div className="w-full text-center">
      <h1 className="text-3xl font-medium">Your Performance 🏆</h1>

      {score > 5 ? (
        <p className="my-5 text-lg text-orange-400">
          🎉 Excellent work! Keep up the fantastic performance.
        </p>
      ) : score > 3 ? (
        <p className="my-5 text-lg text-orange-400">
          👍 Well done! You're making steady progress.
        </p>
      ) : (
        <p className="my-5 text-lg text-orange-400">
          📚 Never stop learning. Success comes with persistence!
        </p>
      )}

      <p className="text-lg">Obtained marks {score} / 10</p>

      <button
        className="mt-5 py-3 px-6 bg-neutral-900 rounded-lg font-semibold cursor-pointer active:scale-98"
        onClick={handleStartAgain}
      >
        Start Again
      </button>
    </div>
  );
}

export default Result;
