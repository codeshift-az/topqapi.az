import { useEffect, useState } from "react";

const BackToTop = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const offset = 200;

  const handleScroll = () => {
    const scroll = window.pageYOffset;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const progress = 307.919 - (scroll * 307.919) / height;
    setScrollPercentage(progress);
  };

  useEffect(() => {
    document.addEventListener("scroll", () => {
      handleScroll();
      setScrollY(window.scrollY);
    });
  }, []);

  if (scrollY < offset) return;

  return (
    <div
      className="progress-wrap active-progress"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }>
      <svg
        className="progress-circle svg-content"
        width="100%"
        height="100%"
        viewBox="-1 -1 102 102">
        <path
          d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
          style={{
            transition: "stroke-dashoffset 10ms linear 0s",
            strokeDasharray: "307.919, 307.919",
            strokeDashoffset: scrollPercentage,
          }}></path>
      </svg>
    </div>
  );
};

export default BackToTop;
