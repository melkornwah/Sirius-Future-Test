import React, { memo, useState } from "react";
import Menu from "../menu/Menu";
import Header from "../header/Header";
import Home from "../pages/home/home/Home";
import Schedule from "../pages/schedule/Schedule";
import "./main.scss";

const Main = () => {
  const [currentPage, setCurrentPage] = useState("schedule");

  return (
    <div className="main">
      <div className="main__menu">
        <Menu currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
      <div className="main__page">
        <Header />
        <div className="main__content">
          {
            currentPage === "home" ? (
              <Home />
            ) : (null)
          }
          {
            currentPage === "schedule" ? (
              <Schedule />
            ) : (null)
          }
        </div>
      </div>
    </div>
  );
};

export default memo(Main);
