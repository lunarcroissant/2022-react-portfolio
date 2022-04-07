import React, {
  createRef,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import Text, { TextSize } from "../../../../components/base/Text/Text";
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
  } = useContext(PageContext);

  const [mouseLocation, setMouseLocation] = useState({ x: 0, y: 0 });

  const ref = createRef<HTMLDivElement>();

  var initialDistanceFromLeft =
    document.getElementById("fullviewportslider__content")?.scrollLeft || 0;

  const ProjectsFullScrollWidth =
    document.getElementById("fullviewportslider__content")?.scrollWidth || 0;

  const ProjectsFullScrollHeight =
    document.getElementById("fullviewportslider__content")?.scrollHeight || 0;

  const scrollHandler = (event: React.UIEvent<HTMLDivElement>) => {
    const eventTarget = event.target as HTMLDivElement;
    // var fullXWidth = eventTarget.scrollWidth;
    // const distanceFromLeft = eventTarget.scrollLeft;

    // const proportionedProjectWidth = fullXWidth / totalPages;

    // console.log(initialDistanceFromLeft - distanceFromLeft);
    // console.log(proportionedProjectWidth);

    // console.log(
    //   (distanceFromLeft + proportionedProjectWidth) / proportionedProjectWidth
    // );

    // if (distanceFromLeft % proportionedProjectWidth === 0) {
    //   setCurrentPage(distanceFromLeft / proportionedProjectWidth);
    // }

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

  useEffect(() => {
    // document.getElementById("fullviewportslider__content").scrollLeft =
    //   currentPage * (ProjectsFullScrollWidth / totalPages);
    return () => {
      // cleanup;
    };
  }, [currentPage]);

  const activeContent = data[currentPage];

  const {
    title,
    description,
    tags,
    imageSource,
    backgroundColour,
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

  document.addEventListener("mouseenter", function (event) {
    aimX = event.pageX;
    aimY = event.pageY;
  });

  document.addEventListener("mouseover", function (event) {
    aimX = event.pageX;
    aimY = event.pageY;
  });

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
    showCTACursor(true);

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

  return (
    <section
      className="fullviewportslider row"
      onMouseEnter={(e) => determineMouseLocation(e)}
      onMouseLeave={() => showCTACursor(false)}
      // onMouseOver={(e) => setMouseLocation({ x: e.pageX, y: e.pageY })}
    >
      <div
        className="fullviewportslider__content"
        id="fullviewportslider__content"
        onScroll={scrollHandler}
        ref={ref}
      >
        {children}
      </div>
      {}
      <InfoTile
        title={title}
        description={description}
        tags={tags}
        imageSource={imageSource}
        backgroundColour={backgroundColour}
      />
      {showCaseStudy ? <CaseStudy data={caseStudyContent} /> : null}

      {showCTACursor && (
        <div className="fullviewportslider__cursor row align-center justify-center center-text">
          <Text size={TextSize.lg}>Read Case Study</Text>
        </div>
      )}

      <PageCounter data={""} />
    </section>
  );
};

export default FullViewportSlider;
