import { useCallback, useEffect, useState } from "react";
import Button, { ButtonType, Icons } from "../../components/base/button/Button";
import Heading, { TextColour } from "../../components/base/Heading/Heading";
import Icon from "../../components/base/Icon/Icon";
import VerticalSpacing from "../../components/base/VerticalSpacing/VerticalSpacing";
import Divider from "../../components/Divider/Divider";
import FullPageModal from "../../components/FullPageModal/FullPageModal";
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
        <Header
          linkLabels={[
            { label: "Work", urlPath: "/" },
            { label: "Profile", urlPath: "/profile" },
            // { label: "Testimonials", urlPath: "/testimonials" },
            // { label: "Contact", urlPath: "/contact" },
          ]}
        />
        {/* <FullPageModal>
          <VerticalSpacing size="lg" />
          <span className="center-text">
            <Heading colour={TextColour.greyBlue} headingLevel="h3">
              Got a great idea and want to work together? Get in touch!
            </Heading>
          </span>

          <VerticalSpacing size="lg" />
          <Button
            buttonVariant={ButtonType.secondaryBlue}
            icon={Icons.mailLight}
          >
            edwardtierney35@gmail.com
          </Button>
          <VerticalSpacing size="lg" />
          <Divider dark={false}>or</Divider>
          <VerticalSpacing size="lg" />
          <div className="row align-center justify-evenly width-100">
            <Icon
              size="xl"
              isButton
              icon={Icons.gitHubLight}
              label="GitHub"
            ></Icon>
            <Icon
              size="xl"
              isButton
              icon={Icons.dribbleLight}
              label="Dribble"
            ></Icon>
            <Icon
              size="xl"
              isButton
              icon={Icons.linkedInLight}
              label="LinkedIn"
            ></Icon>
          </div>
        </FullPageModal> */}
        <FullViewportSlider data={projectsArray}>
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
