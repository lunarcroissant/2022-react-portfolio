import { useContext, useEffect, useRef, useState } from "react";
import CheckboxItem from "../../base/CheckboxItem/CheckboxItem";
import Heading, { TextColour } from "../../base/Heading/Heading";
import VerticalSpacing from "../../base/VerticalSpacing/VerticalSpacing";
import TabsContext from "../contexts/TabsContext";

import "./Tabs.css";

interface IProps {
  data: any;
  heading?: string;
}

const Tabs = ({ data, heading }: IProps) => {
  const { label, handleClick, active, content } = data;

  const tabs = useRef(document.createElement("div"));

  const [scrolledDistance, setScrolledDistance] = useState(0);

  const { filter, setFilter } = useContext(TabsContext);

  // function useScrolledDistance(ref: any) {
  //   useEffect(() => {
  //     function recordScrollDistance(event: any) {
  //       if (ref.current && ref.current.offsetTop) {
  //         setScrolledDistance(ref.current.offsetTop);
  //       }
  //     }

  //     document.addEventListener("scroll", recordScrollDistance);
  //     return () => {
  //       document.removeEventListener("scroll", recordScrollDistance);
  //     };
  //   }, [ref]);
  // }

  function recordScrollDistance(e: Event) {
    const verticalOffset =
      document.body.scrollTop || document.documentElement.scrollTop;
    const percentageVerticalOffset = window.innerHeight;

    // if (!tabs.current.offsetTop)

    setScrolledDistance(tabs.current.getBoundingClientRect().y);
    console.log(scrolledDistance);
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

  // useEffect(() => {
  //   function recordScrollDistance(event: any, ref: any) {
  //     if (ref.current && ref.current.offsetTop) {
  //       setScrolledDistance(ref.current.offsetTop);
  //     }
  //   }

  //   document.addEventListener("scroll", recordScrollDistance);
  //   return () => {
  //     document.removeEventListener("scroll", recordScrollDistance);
  //   };
  // }, []);
  return (
    <div
      className={`width-100 row align-center justify-center center-xs middle-xs tabs`}
      ref={tabs}
      // style={
      //   scrolledDistance < 400
      //     ? {
      //         top: `${scrolledDistance}`,
      //         filter: `blur(${
      //           (scrolledDistance * scrolledDistance) / 100 + 300
      //         }px)`,
      //       }
      //     : undefined
      // }
      // onScroll={(e: any) => recordScrollDistance(e)}
    >
      <div
        className="width-100 col center-xs tabs__menu"
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
        {heading ? (
          <>
            <div
              className="width-100 row justify-center align-center tabs__heading"
              // style={
              //   scrolledDistance < 1200
              //     ? {
              //         transform: `translateY(1rem)`,
              //         opacity: 0,
              //       }
              //     : {
              //         transform: `translateY(0)`,
              //         opacity: 1,
              //       }
              // }
            >
              <Heading headingLevel="h2" colour={TextColour.white}>
                What I help with
              </Heading>
              <VerticalSpacing size="xl" />
            </div>
          </>
        ) : null}
        <div
          className={`row tabs__container ${
            scrolledDistance > 400 ? null : "scrolling"
          }`}
          // style={
          //   scrolledDistance < 400
          //     ? {
          //         top: `${scrolledDistance}`,
          //         position: "absolute",
          //         width: "100vw",
          //         height: "100vh",

          //         // filter: `blur(${
          //         //   (scrolledDistance * scrolledDistance) / 100 + 300
          //         // }px)`,
          //         overflow: "visible",
          //       }
          //     : undefined
          // }
          // style={
          //   scrolledDistance < 400
          //     ? {
          //         top: `${scrolledDistance}`,
          //         filter: `blur(${
          //           (scrolledDistance * scrolledDistance) / 100
          //         }px)`,
          //       }
          //     : undefined
          // }
        >
          {data.map((tab: any) => {
            return (
              <CheckboxItem
                label={tab.label}
                active={tab.label === filter}
                handleClick={() => setFilter(tab.label)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
