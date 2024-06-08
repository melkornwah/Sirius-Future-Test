import React, { memo, useEffect, useState } from "react";
import "./nextLesson.scss";

const MINUTE_MS = 60000;

const NextLesson = () => {
  const [daysLeft, setDaysLeft] = useState(6);
  const [hoursLeft, setHoursLeft] = useState(12);
  const [minutesLeft, setMinutesLeft] = useState(24);

  const resetDays = () => {
    setDaysLeft(6);
    setHoursLeft(12);
    setMinutesLeft(24);
  };

  const resetHours = () => {
    if (daysLeft > 0) {
      setDaysLeft(daysLeft - 1);
      setHoursLeft(23);
    } else {
      resetDays();
    }
  };

  const resetMinutes = () => {
    setMinutesLeft(59);

    if (hoursLeft > 0) {
      setHoursLeft(hoursLeft - 1);
    } else {
      resetHours();
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (minutesLeft > 0) {
        setMinutesLeft(minutesLeft - 1);
      } else {
        resetMinutes();
      }
    }, MINUTE_MS);

    return () => clearInterval(interval);
  }, [daysLeft, hoursLeft, minutesLeft]);

  return (
    <div className="next-lesson">
      <h2 className="next-lesson__heading">
        Следующее занятие начнется через:
      </h2>
      <div className="next-lesson__timer">
        <div className="timer__item">
          <p className="timer__number">
            {daysLeft}
          </p>
          <p className="timer__text">
            д
          </p>
        </div>
        <div className="timer__item">
          <p className="timer__number">
            {hoursLeft}
          </p>
          <p className="timer__text">
            ч
          </p>
        </div>
        <div className="timer__item">
          <p className="timer__number">
            {minutesLeft}
          </p>
          <p className="timer__text">
            мин
          </p>
        </div>
      </div>
      <button
        className="next-lesson__button"
        type="button"
      >
        Button
      </button>
    </div>
  );
};

export default memo(NextLesson);
