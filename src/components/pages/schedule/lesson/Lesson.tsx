import React, { memo } from "react";
import "./lesson.scss";

type LessonProps = {
  index: number,
  time: string,
  lessonName: string,
  status: string,
  outline?: boolean,
  unpaidFor?: boolean,
};

const Lesson = ({
  index,
  time,
  lessonName,
  status,
  outline,
  unpaidFor,
}: LessonProps) => {
  return (
    <li key={`${status}_${index}`} className={`lesson ${outline ? "lesson_shadowed" : ""}`}>
      <button
        className={`lesson__button ${status ? `lesson__button_${status}` : ""}`}
        type="button"
      >
        <div className="lesson__container">
          <p className="lesson__time">
            {time}
          </p>
          <p className="lesson__name">
            {lessonName}
          </p>
          {
            unpaidFor ? (
              <img
                className="lesson__unpaid"
                src="/images/schedule/unpaid.svg"
                alt="Не оплачено"
              />
            ) : null
          }
        </div>
      </button>
    </li>
  );
};

export default memo(Lesson);
