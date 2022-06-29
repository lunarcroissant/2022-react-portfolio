import { useContext, useState } from "react";
import Header from "../../components/global/Header/Header";
import MobileMenu from "../../components/global/MobileMenu/MobileMenu";
import GlobalContext from "../../contexts/GlobalContext/GlobalContext";
import PageContext from "../../contexts/PageContext/PageContext";
import FullViewportSlider from "./components/FullViewportSlider/FullViewportSlider";
import Project from "./components/Project/Project";
import "./Work.css";
import loadingAnimation from "../../lotties/PortfolioAnimations.json";
interface IProps {
  data?: any;
}

const Work = ({ data }: IProps) => {
  const projects: any = require("./Projects.json");

  const { mobileMenuVisible } = useContext(GlobalContext);

  const projectsArray = projects.projects;

  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(projectsArray.length);
  const [scrollProjects, setScrollProjects] = useState(0);
  const [showCaseStudy, setShowCaseStudy] = useState(false);
  const [showCTACursor, setShowCTACursor] = useState(true);
  const [scaleImage, setScaleImage] = useState(1);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <PageContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        totalPages,
        setTotalPages,
        scrollProjects,
        setScrollProjects,
        showCaseStudy,
        setShowCaseStudy,
        showCTACursor,
        setShowCTACursor,
        scaleImage,
        setScaleImage,
      }}
    >
      <div className="pageContainer col">
        <Header
          linkLabels={[
            { label: "Work", urlPath: "/" },
            { label: "Profile", urlPath: "/profile" },
          ]}
        />
        {mobileMenuVisible ? <MobileMenu links={["Profile"]} /> : null}

        <FullViewportSlider data={projectsArray}>
          {projectsArray.map((project: any) => {
            return (
              <Project
                imageSource={project.heroImage}
                backgroundColour={project.backgroundColour}
                key={project.title}
              />
            );
          })}
        </FullViewportSlider>
      </div>
    </PageContext.Provider>
  );
};

export default Work;
