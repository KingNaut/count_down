import React, { useEffect, useState } from "react";
import moment from "moment";
import "./styles.css";

const CountDown = () => {
  const [day, setDay] = useState<number>(0);
  const [second, setSecond] = useState<number>(0);
  const [minute, setMinute] = useState<number>(0);
  const [hour, setHour] = useState<number>(0);

  //MM DD YYYY, h:mm:ss

  useEffect(() => {
    setInterval(() => {
      calculateETA();
    }, 1000);
  }, []);

  const dayETA = () => {
    return day >= 10 ? day : `0${day}`;
  };

  const hourETA = () => {
    return hour >= 10 ? hour : `0${hour}`;
  };
  const minuteETA = () => {
    return minute >= 10 ? minute : `0${minute}`;
  };
  const secondETA = () => {
    return second >= 10 ? second : `0${second}`;
  };

  const calculateETA = () => {
    const currentDate = Number(moment().valueOf());
    // 1609434000000
    // 12/02/2021 : 1609434000000
    // const destinationDate = Number(moment(1613062800000).valueOf());

    const destinationDate = Number(moment(1613062800000).valueOf());

    // snct 12/12/2020: 1607706000000

    let diff = destinationDate - currentDate;

    console.log(diff);

    let milliseconds = diff % 1000;

    if (diff > 0) {
      diff = Math.floor((diff - milliseconds) / 1000);
      setSecond(Math.floor(diff % 60));

      diff = Math.floor((diff - second) / 60);
      setMinute(Math.floor(diff % 60));

      diff = Math.floor((diff - minute) / 60);
      setHour(Math.floor(diff % 24));

      setDay(Math.floor((diff - hour) / 24));
    }
    return;
  };

  return (
    <div className="main">
      <div className="row">
        <div className="col-12">
          <div className="col-1 right"></div>
          <div className="col-2 right block">
            <div className="aside">
              <p className="digit">{dayETA()}</p>
              <p className="text">Ngày</p>
            </div>
          </div>

          <div className="col-2 right block">
            <div className="aside">
              <p className="digit">{hourETA()}</p>
              <p className="text">Giờ</p>
            </div>
          </div>

          <div className="col-2 right block">
            <div className="aside">
              <p className="digit">{minuteETA()}</p>
              <p className="text">Phút</p>
            </div>
          </div>

          <div className="col-2 right block">
            <div className="aside">
              <p className="digit">{secondETA()}</p>
              <p className="text">Giây</p>
            </div>
          </div>
          <div className="col-1 right"></div>
        </div>
      </div>

      {/* <div className="countdown">
        <div className="block">
          <p className="digit">{dayETA()}</p>
          <p className="text">Ngày</p>
        </div>
        <div className="block">
          <p className="digit">{hourETA()}</p>
          <p className="text">Giờ</p>
        </div>
        <div className="block">
          <p className="digit">{minuteETA()}</p>
          <p className="text">Phút</p>
        </div>
        <div className="block">
          <p className="digit">{secondETA()}</p>
          <p className="text">Giây</p>
        </div>
      </div> */}
    </div>
  );
};

export default CountDown;
