import React, { memo } from "react";
import AdBanner from "../adBanner/AdBanner";
import NextLesson from "../nextLesson/NextLesson";
import Homework from "../homework/Homework";
import Balance from "../balance/Balance";
import UpcomingLessons from "../upcomingLessons/UpcomingLessons";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="home__top">
        <AdBanner />
        <NextLesson />
        <Homework />
      </div>
      <div className="home__bottom">
        <Balance />
        <UpcomingLessons />
      </div>
    </div>
  );
};

export default memo(Home);
