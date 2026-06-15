import React, { useEffect, useState } from "react";

function Timer({ setIsOver, setLeftTime, leftTime }) {
  const [formateTime, setFormateTime] = useState("");

  useEffect(() => {
    let intervalID = setInterval(() => {
      setLeftTime((prev) => {
        if (prev > 0) {
          return prev - 1;
        } else {
          clearInterval(intervalID);
          setIsOver(true);
          return 0;
        }
      });
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  useEffect(() => {
    let formationOfTime = `${Math.floor(leftTime / 60)
      .toString()
      .padStart(2, 0)} : ${(leftTime % 60).toString().padStart(2, 0)}`;
    setFormateTime(formationOfTime);
  }, [leftTime]);

  return (
    <div className="w-full">
      <p className="text-lg font-medium">
        🕐 Reamining Time:{" "}
        <span className="text-orange-400">{formateTime}</span>
      </p>
    </div>
  );
}

export default Timer;
