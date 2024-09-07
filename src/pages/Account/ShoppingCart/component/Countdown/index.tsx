import { useState, useEffect } from "react";

// Assets
import { IconFire } from "@/assets/images";

const Countdown = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const timer = 600;
  useEffect(() => {
    const endTime = Date.now() + timer * 1000;
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const distance = endTime - now;
      if (distance < 0) {
        clearInterval(intervalId);
        return;
      }
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTime({ days, hours, minutes, seconds });
    };

    calculateTimeLeft();
    const intervalId = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(intervalId);
  }, [timer]);

  const formatTime = (value: number) => ("0" + value).slice(-2);

  return (
    <div className="tf-cart-countdown">
      <div className="title-left">
        <img src={IconFire} alt="icon" className="d-inline-block" />
        <p>These products are limited, checkout within </p>
      </div>
      <div className="js-countdown timer-count">
        {time.days <= 0 ? (
          <span></span>
        ) : (
          <span className="countdown__item">
            <span className="countdown__value">{time.days}</span>
            <span className="countdown__label">d:</span>
          </span>
        )}
        {time.hours <= 0 ? (
          <span></span>
        ) : (
          <span className="countdown__item">
            <span className="countdown__value">{formatTime(time.hours)}</span>
            <span className="countdown__label">h:</span>
          </span>
        )}
        {time.minutes <= 0 ? (
          <span></span>
        ) : (
          <span className="countdown__item">
            <span className="countdown__value">{formatTime(time.minutes)}</span>
            <span className="countdown__label">m:</span>
          </span>
        )}
        {time.seconds <= 0 ? (
          <span></span>
        ) : (
          <span className="countdown__item">
            <span className="countdown__value">{formatTime(time.seconds)}</span>
            <span className="countdown__label">s</span>
          </span>
        )}
      </div>
    </div>
  );
};

export default Countdown;
