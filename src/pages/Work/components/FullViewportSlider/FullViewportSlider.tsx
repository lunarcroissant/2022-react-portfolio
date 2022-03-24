import {
  createRef,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import PageContext from "../../../../contexts/PageContext/PageContext";
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
    setTotalPages,
    totalPages,
    scrollProjects,
    setScrollProjects,
  } = useContext(PageContext);

  const ref = createRef<HTMLDivElement>();

  var initialDistanceFromLeft =
    document.getElementById("fullviewportslider__content")?.scrollLeft || 0;

  const ProjectsFullScrollWidth =
    document.getElementById("fullviewportslider__content")?.scrollWidth || 0;

  console.log(ProjectsFullScrollWidth);

  const scrollHandler = (event: React.UIEvent<HTMLDivElement>) => {
    const eventTarget = event.target as HTMLDivElement;
    var fullXWidth = eventTarget.scrollWidth;
    const distanceFromLeft = eventTarget.scrollLeft;

    const proportionedProjectWidth = fullXWidth / totalPages;

    console.log(initialDistanceFromLeft - distanceFromLeft);
    console.log(proportionedProjectWidth);

    console.log(
      (distanceFromLeft + proportionedProjectWidth) / proportionedProjectWidth
    );

    if (distanceFromLeft % proportionedProjectWidth === 0) {
      setCurrentPage(distanceFromLeft / proportionedProjectWidth);
    }
  };

  useEffect(() => {
    // document.getElementById("fullviewportslider__content").scrollLeft =
    //   currentPage * (ProjectsFullScrollWidth / totalPages);
    return () => {
      // cleanup;
    };
  }, [currentPage]);

  const activeContent = data[currentPage];

  const { title, description, tags, imageSource, backgroundColour } =
    activeContent;

  return (
    <section className="fullviewportslider row">
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
      <PageCounter data={""} />
    </section>
  );
};

export default FullViewportSlider;
