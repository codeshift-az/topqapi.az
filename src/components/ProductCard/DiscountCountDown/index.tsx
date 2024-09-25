import { useState, useEffect } from "react";

const DiscountCountDown = ({ discountEnd }) => {
  const targetDate = new Date(discountEnd).getTime();

  const [timeLeft, setTimeLeft] = useState(targetDate - new Date().getTime());

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft(0);
      } else {
        setTimeLeft(distance);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  const formatTime = (value: number) => ("0" + value).slice(-2);
  return (
    <div className="countdown-box">
      <div className="js-countdown">
        <div className="countdown_timer">
          <span className="countdown__item">{days}</span>
          <span className="countdown__item">d :</span>

          <span className="countdown__item"> {formatTime(hours)}</span>
          <span className="countdown__item">h :</span>

          <span className="countdown__item"> {formatTime(minutes)}</span>
          <span className="countdown__item">m :</span>

          <span className="countdown__item"> {formatTime(seconds)}</span>
          <span className="countdown__item">s</span>

        </div>
      </div>
    </div>
  );
};

export default DiscountCountDown;
