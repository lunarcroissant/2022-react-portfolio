import { useContext } from "react";
import PageContext from "../../../../contexts/PageContext/PageContext";
import ProjectImage from "../ProjectImage/ProjectImage";

import "./Project.css";

interface IProps {
  imageSource: string;
  backgroundColour: string;
}

const Project = ({ imageSource, backgroundColour }: IProps) => {
  const {
    currentPage,
    setCurrentPage,
    setTotalPages,
    totalPages,
    showCaseStudy,
    setShowCaseStudy,
  } = useContext(PageContext);

  return (
    <a
      className="project"
      onScroll={() => setCurrentPage(currentPage + 1)}
      onClick={() => setShowCaseStudy(!showCaseStudy)}
    >
      <ProjectImage source={imageSource} backgroundColour={backgroundColour} />
    </a>
  );
};

export default Project;
