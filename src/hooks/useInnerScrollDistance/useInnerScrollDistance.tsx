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

  return height;
};

export default useInnerScrollDistance;
