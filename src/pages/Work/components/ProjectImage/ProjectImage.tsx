import { useContext } from "react";
import PageContext from "../../../../contexts/PageContext/PageContext";
import "./ProjectImage.css";

interface IProps {
  source: string;
  backgroundColour: string;
}

const ProjectImage = ({ source, backgroundColour }: IProps) => {
  const { showCaseStudy } = useContext(PageContext);
  return (
    <div
      className={`projectImage__container row align-center justify-center`}
      style={{ background: `${backgroundColour}` }}
    >
      <img
        src={`${process.env.PUBLIC_URL}/assets/caseStudyImages/${source}`}
        alt=""
        className={`projectImage ${showCaseStudy ? "fadeAway" : null}`}
      />
    </div>
  );
};

export default ProjectImage;
