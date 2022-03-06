import "./ProjectImage.css";

interface IProps {
  source: string;
  backgroundColour: string;
}

const ProjectImage = ({ source, backgroundColour }: IProps) => {
  return (
    <div
      className="projectImage__container row align-center justify-center"
      style={{ background: `${backgroundColour}` }}
    >
      <img
        src={`${process.env.PUBLIC_URL}/assets/caseStudyImages/${source}`}
        alt=""
        className="projectImage"
      />
    </div>
  );
};

export default ProjectImage;
