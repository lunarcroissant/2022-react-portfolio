import { useContext } from "react";
import PageContext from "../../../../contexts/PageContext/PageContext";
import InfoTile from "../InfoTile/InfoTile";
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
  const { currentPage, setCurrentPage, setTotalPages, totalPages } =
    useContext(PageContext);
  return (
    <section
      className="project"
      onScroll={() => setCurrentPage(currentPage + 1)}
    >
      {/* <InfoTile
        title={title}
        description={description}
        tags={tags}
        imageSource={imageSource}
        backgroundColour={backgroundColour}
      /> */}
      <ProjectImage source={imageSource} backgroundColour={backgroundColour} />
    </section>
  );
};

export default Project;
