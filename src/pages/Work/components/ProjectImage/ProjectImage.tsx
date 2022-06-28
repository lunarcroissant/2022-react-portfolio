import { useContext } from "react";
import GlobalContext from "../../../../contexts/GlobalContext/GlobalContext";
import PageContext from "../../../../contexts/PageContext/PageContext";
import "./ProjectImage.css";

interface IProps {
  source: string;
  backgroundColour: string;
}

const ProjectImage = ({ source, backgroundColour }: IProps) => {
  const { showCaseStudy } = useContext(PageContext);
  const { setLoading } = useContext(GlobalContext);

  const handleLoadingComplete = () => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  return (
    <div
      className={`projectImage__container row align-center justify-end`}
      style={{ background: `${backgroundColour}` }}
    >
      <img
        src={`${process.env.PUBLIC_URL}/assets/caseStudyImages/${source}`}
        alt=""
        className={`projectImage ${showCaseStudy ? "fadeAway" : null}`}
        onLoad={() => handleLoadingComplete()}
      />
    </div>
  );
};

export default ProjectImage;
