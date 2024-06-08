import React, { memo } from "react";
import HomeworkButton from "../homeworkButton/HomeworkButton";
import "./homework.scss";

const Homework = () => {
  return (
    <div className="homework">
      <HomeworkButton
        text="Домашние задания"
        icon="homework"
        backgroundColor="#E8CBFF"
      />
      <HomeworkButton
        text="Отчеты от&nbsp;учителей"
        icon="teachers"
        backgroundColor="#D8ECFF"
      />
    </div>
  );
};

export default memo(Homework);
