import { useContext, useEffect, useState } from "react";
import GlobalContext from "../../../../contexts/GlobalContext/GlobalContext";
import PageContext from "../../../../contexts/PageContext/PageContext";
import "./ProjectImage.css";

interface IProps {
  source: string;
  backgroundColour: string;
}

const ProjectImage = ({ source, backgroundColour }: IProps) => {
  const { showCaseStudy, scaleImage } = useContext(PageContext);
  const { setLoading } = useContext(GlobalContext);
  const [scale, setScale] = useState(1);

  const handleLoadingComplete = () => {
    setTimeout(() => {
      setLoading(false);
    }, 2630);
  };

  useEffect(() => {
    setScale(1);

    // return (() => {

    // })
  }, [scale]);

  const scrollHandler = (event: React.UIEvent<HTMLDivElement>) => {
    const eventTarget = event.target as HTMLDivElement;

    const distanceFromTop = eventTarget.scrollTop;

    // const proportionedProjectHeight = fullYHeight / totalPages;

    // setCurrentPage(Math.round(distanceFromTop / proportionedProjectHeight));
  };
  return (
    <div
      className={`projectImage__container row align-center justify-end`}
      style={{
        background: `${backgroundColour}`,
      }}
      onScroll={scrollHandler}
    >
      <img
        src={`${process.env.PUBLIC_URL}/assets/caseStudyImages/${source}`}
        alt=""
        loading="eager"
        className={`projectImage ${showCaseStudy ? "fadeAway" : null}`}
        onLoad={() => handleLoadingComplete()}
        style={{ transform: `scale(${scaleImage})` }}
      />
    </div>
  );
};

export default ProjectImage;
