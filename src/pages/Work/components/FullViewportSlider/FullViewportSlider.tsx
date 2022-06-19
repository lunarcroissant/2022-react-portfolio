import React, { createRef, memo, ReactNode, useContext, useState } from "react";
import PageContext from "../../../../contexts/PageContext/PageContext";
import CaseStudy from "../../../CaseStudy/CaseStudy";
import InfoTile from "../InfoTile/InfoTile";
import PageCounter from "../PageCounter/PageCounter";
import "./FullViewportSlider.css";

interface IProps {
  children: ReactNode;
  data: any;
}

const FullViewportSlider = ({ children, data }: IProps) => {
  const {
    currentPage,
    setCurrentPage,
    totalPages,
    showCaseStudy,
    showCTACursor,
    setShowCTACursor,
  } = useContext(PageContext);

  const [mouseLocation, setMouseLocation] = useState({ x: 0, y: 0 });

  const ref = createRef<HTMLDivElement>();

  const scrollHandler = (event: React.UIEvent<HTMLDivElement>) => {
    const eventTarget = event.target as HTMLDivElement;

    // Measuring via Height

    var fullYHeight = eventTarget.scrollHeight;

    // let sliderHeight = eventTarget;
    const distanceFromTop = eventTarget.scrollTop;

    const proportionedProjectHeight = fullYHeight / totalPages;

    setCurrentPage(Math.round(distanceFromTop / proportionedProjectHeight));

    // Only fire when project is exactly in view
    // if (distanceFromTop % proportionedProjectHeight === 0) {
    //   setCurrentPage(distanceFromTop / proportionedProjectHeight);
    // }
  };

  const activeContent = data[currentPage];

  const {
    title,
    description,
    tags,
    imageSource,
    backgroundColour,
    darkerColour,
    caseStudyContent,
  } = activeContent;

  const projectCursor = document.querySelector(
    "div.fullviewportslider__cursor"
  ) as HTMLElement;
  // const balls = cursorTag?.querySelectorAll("div");

  // window.addEventListener("load", determineMouseLocation);

  // window.removeEventListener("load", determineMouseLocation);

  // useEffect(() => {
  //   // window.addEventListener("load", determineMouseLocation);
  //   // determineMouseLocation;

  //   document.addEventListener("mouseenter", function (event) {
  //     aimX = event.pageX;
  //     aimY = event.pageY;
  //     // setMouseLocation({ x: aimX, y: aimY });
  //   });

  //   return () => {
  //     // window.removeEventListener("load", determineMouseLocation);

  //     document.addEventListener("mouseenter", function (event) {
  //       aimX = event.pageX;
  //       aimY = event.pageY;
  //       // setMouseLocation({ x: aimX, y: aimY });
  //     });
  //   };
  // }, [currentPage]);

  // useEffect(() => {
  //   document.addEventListener("mouseenter", function (event) {
  //     aimX = event.clientX;
  //     aimY = event.clientY;
  //   });

  //   return () => {
  //     document.removeEventListener("mouseenter", function (event) {
  //       aimX = event.clientX;
  //       aimY = event.clientY;
  //     });
  //   };
  // }, [showCaseStudy, showCTACursor]);

  // document.addEventListener("mouseenter", function (event) {
  //   aimX = event.pageX;
  //   aimY = event.pageY;
  // });

  // document.addEventListener("mouseover", function (event) {
  //   aimX = event.pageX;
  //   aimY = event.pageY;
  // });

  let aimX = window.innerWidth * 0.5;
  let aimY = window.innerHeight * 0.5;

  // let currentX = mouseLocation.x;
  // let currentY = mouseLocation.y;

  let currentX = 0;
  let currentY = 0;

  let speed = 0.2;

  const determineMouseLocation = (event: any) => {
    var aimX = event.pageX;
    var aimY = event.pageY;
    setMouseLocation({ x: aimX, y: aimY });
    // showCTACursor(true);

    if (projectCursor) {
      projectCursor.style.left = aimX + "px";
      projectCursor.style.top = aimY + "px";
    }
  };

  const animate = function () {
    currentX += (aimX - currentX) * speed;
    currentY += (aimY - currentY) * speed;

    // alert(window.innerWidth);

    // currentX += aimX;
    // currentY += aimY;

    // alert(`${currentX}, ${currentY}`);

    if (projectCursor) {
      projectCursor.style.left = currentX + "px";
      projectCursor.style.top = currentY + "px";
    }

    requestAnimationFrame(animate);
  };

  animate();

  document.addEventListener("mousemove", function (event) {
    aimX = event.pageX;
    aimY = event.pageY;
  });

  // document.addEventListener("pageload", function (event) {
  //   aimX = event.target?.dispatchEvent.prototype.;
  //   aimY = event.pageY;
  //   showCTACursor(true);
  // });

  // document.addEventListener("mouseleave", function (event) {
  //   showCTACursor(false);
  // });

  const caseStudyInfo = {
    ...caseStudyContent,
    backgroundColour: backgroundColour,
  };

  return (
    <section
      className="fullviewportslider row"
      onMouseEnter={(e) => determineMouseLocation(e)}
      onMouseLeave={() => setShowCTACursor(false)}
      // onMouseOver={(e) => setMouseLocation({ x: e.pageX, y: e.pageY })}
    >
      <div className="projectContext row justify-between align-center">
        <InfoTile
          title={title}
          description={description}
          tags={tags}
          imageSource={imageSource}
          backgroundColour={backgroundColour}
          darkerColour={darkerColour}
          key={`InfoTile_${title}`}
        />
        <PageCounter data={data} />
      </div>

      <div
        className="fullviewportslider__content"
        id="fullviewportslider__content"
        onScroll={scrollHandler}
        ref={ref}
      >
        {children}
      </div>
      {}

      {showCaseStudy ? <CaseStudy data={caseStudyInfo} /> : null}

      {showCTACursor && showCaseStudy
        ? null
        : // <div
          //   className={`fullviewportslider__cursor row align-center justify-center center-text`}
          // >
          //   <Text size={TextSize.lg}>Read Case Study</Text>
          // </div>
          null}
    </section>
  );
};

export default memo(FullViewportSlider);
