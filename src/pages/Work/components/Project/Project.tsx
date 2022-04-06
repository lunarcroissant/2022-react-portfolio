import { useContext } from "react";
import PageContext from "../../../../contexts/PageContext/PageContext";
import InfoTile from "../InfoTile/InfoTile";
import Text, { TextSize } from "../../../../components/base/Text/Text";
import ProjectImage from "../ProjectImage/ProjectImage";

import "./Project.css";

interface IProps {
  title: string;
  description: string;
  tags: string[];
  imageSource: string;
  backgroundColour: string;
}

const Project = ({
  title,
  description,
  tags,
  imageSource,
  backgroundColour,
}: IProps) => {
  const {
    currentPage,
    setCurrentPage,
    setTotalPages,
    totalPages,
    setShowCaseStudy,
  } = useContext(PageContext);

  return (
    <a
      className="project"
      onScroll={() => setCurrentPage(currentPage + 1)}
      onClick={() => setShowCaseStudy(true)}
    >
      {/* <InfoTile
        title={title}
        description={description}
        tags={tags}
        imageSource={imageSource}
        backgroundColour={backgroundColour}
      /> */}

      <ProjectImage source={imageSource} backgroundColour={backgroundColour} />
    </a>
  );
};

export default Project;
