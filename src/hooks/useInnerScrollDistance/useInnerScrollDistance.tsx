import { useEffect, useState } from "react";

const useInnerScrollDistance = () => {
  const [height, setHeight] = useState(window.screenY);

  useEffect(() => {
    const handleResize = () => {
      setHeight(window.screenY);
    };

    const handleScroll = (e: Event) => {
      const verticalOffset =
        document.body.scrollTop || document.documentElement.scrollTop;
      const percentageVerticalOffset = window.innerHeight;

      // setBlur(`${(verticalOffset / percentageVerticalOffset) * 7}px`);
      setHeight(verticalOffset);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function recordScrollDistance(e: Event) {
    const verticalOffset =
      document.body.scrollTop || document.documentElement.scrollTop;
    const percentageVerticalOffset = window.innerHeight;

    // if (!tabs.current.offsetTop)

    // setHeight(tabs.current.getBoundingClientRect().y);
    // console.log(scrolledDistance);
    // if (tabs.current && tabs.current.offsetTop) {
    //   setScrolledDistance(tabs.current.offsetTop);
    // }
  }

  useEffect(() => {
    window.addEventListener("scroll", recordScrollDistance);
    // if (tabs) {
    //  recordScrollDistance(tabs.current.offsetTop);
    // }

    return () => {
      window.removeEventListener("scroll", recordScrollDistance);
    };
  });

  return height;
};

export default useInnerScrollDistance;
