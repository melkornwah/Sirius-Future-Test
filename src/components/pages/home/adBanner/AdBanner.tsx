import React, { memo } from "react";
import "./adBanner.scss";

const AdBanner = () => {
  return (
    <div className="banner">
      <h2 className="banner__heading">
        До 31 декабря любой курс со скидкой 20%
      </h2>
      <p className="banner__text">
        До конца года у вас есть уникальная 
        возможность воспользоваться нашей 
        новогодней скидкой 20% на любой курс!
      </p>
      <img className="banner__image" src="images/specialGift/specialImage.svg" alt="Скидка" />
    </div>
  );
};

export default memo(AdBanner);
