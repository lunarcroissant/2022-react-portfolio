import { useCallback, useEffect, useState } from "react";
import Header from "../../components/global/Header/Header";
import PageContext from "../../contexts/PageContext/PageContext";
import FullViewportSlider from "./components/FullViewportSlider/FullViewportSlider";
import InfoTile from "./components/InfoTile/InfoTile";
import PageCounter from "./components/PageCounter/PageCounter";
import Project from "./components/Project/Project";
import ProjectImage from "./components/ProjectImage/ProjectImage";
import "./Work.css";

interface IProps {
  data?: any;
}

const Work = ({ data }: IProps) => {
  const projects: any = require("./Projects.json");

  const projectsArray = projects.projects;

  const lod = require("lodash");

  const debouncedScroll = useCallback(lod.debounce(console.log, 500), []);

  const handleScroll = (e: Event) => {
    debouncedScroll(e);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    console.log("firing");

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(projectsArray.length);
  const [scrollProjects, setScrollProjects] = useState(0);

  return (
    <PageContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        totalPages,
        setTotalPages,
        scrollProjects,
        setScrollProjects,
      }}
    >
      <div className="pageContainer col" onScroll={(e: any) => handleScroll(e)}>
        <Header linkLabels={["Work", "Profile", "Testimonials", "Contact"]} />
        <FullViewportSlider>
          {projectsArray.map((project: any) => {
            return (
              <Project
                title={project.title}
                description={project.description}
                tags={project.tags}
                imageSource={project.heroImage}
                backgroundColour={project.backgroundColour}
              />
            );
          })}
        </FullViewportSlider>
        {/* <ProjectImage source="test" />
      <div className="row width-100">
        <InfoTile data={data.projects} />
        <PageCounter data={data.projects} />
      </div> */}
        {/* <PageCounter data={projects} /> */}
      </div>
    </PageContext.Provider>
  );
};

export default Work;
