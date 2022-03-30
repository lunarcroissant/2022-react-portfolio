import { useEffect, useRef, useState } from "react";
import ItemTile from "../ItemTile/ItemTile";
import "./ItemsGrid.css";

interface IProps {
  data?: any;
  filter: string;
}

const ItemsGrid = ({ data, filter }: IProps) => {
  const tabs = useRef(document.createElement("div"));

  const [scrolledDistance, setScrolledDistance] = useState(0);

  function recordScrollDistance(e: Event) {
    const verticalOffset =
      document.body.scrollTop || document.documentElement.scrollTop;
    const percentageVerticalOffset = window.innerHeight;

    // if (!tabs.current.offsetTop)

    setScrolledDistance(tabs.current.getBoundingClientRect().y);
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
  return (
    <div
      className="itemsGrid width-100"
      ref={tabs}
      style={
        scrolledDistance > window.innerHeight * 0.7
          ? {
              transform: `translateY(1rem)`,
              opacity: 0,
              // position: "absolute",
              // top: "2rem",
            }
          : {
              transform: `translateY(0)`,
              opacity: 1,
            }
      }
    >
      {/* <div className="width-100"></div> */}
      {data.map((item: any) => {
        return (
          <ItemTile label={item.skill} subInfo={item.status} icon={item.icon} />
        );
      })}
    </div>
  );
};

export default ItemsGrid;
