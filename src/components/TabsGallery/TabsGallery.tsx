import { ReactNode, useEffect, useState } from "react";
import useViewportSize from "../../hooks/useViewportSize/useViewportSize";
import ItemsGrid from "../../pages/Profile/components/ItemsGrid/ItemsGrid";
// import useInnerScrollDistance from "../../hooks/useInnerScrollDistance/useInnerScrollDistance";
import CheckboxItem from "../base/CheckboxItem/CheckboxItem";
import Heading, { TextColour } from "../base/Heading/Heading";
import VerticalSpacing from "../base/VerticalSpacing/VerticalSpacing";
import TabsContext from "./contexts/TabsContext";
import Tabs from "./Tabs/Tabs";

import "./TabsGallery.css";

interface IProps {
  data: any;
  children?: ReactNode;
  heading?: string;
}

const TabsGallery = ({ data, children, heading }: IProps) => {
  const { label, handleClick, active, content } = data;

  const [filter, setFilter] = useState(data[0].label);
  const [scrolledDistance, setScrolledDistance] = useState(window.screenY);
  const [blur, setBlur] = useState("0px");

  const isMobile = useViewportSize(1024);

  // var pagePosition = useInnerScrollDistance();

  // console.log(pagePosition);

  // useEffect(() => {
  //   window.addEventListener("scroll", useInnerScrollDistance);
  //   setScrolledDistance(useInnerScrollDistance);

  //   var pagePosition = useInnerScrollDistance();

  //   console.log(pagePosition);

  //   return () => {
  //     window.removeEventListener("scroll", useInnerScrollDistance);
  //   };
  // });

  // const useInnerScrollDistance = (e: Event) => {
  //   const [height, setHeight] = useState(window.screenY);

  //   useEffect(() => {
  //     const handleResize = () => {
  //       setHeight(window.screenY);
  //     };

  //     const handleScroll = (e: Event) => {
  //       const verticalOffset =
  //         document.body.scrollTop || document.documentElement.scrollTop;
  //       const percentageVerticalOffset = window.innerHeight;

  //       // setBlur(`${(verticalOffset / percentageVerticalOffset) * 7}px`);
  //       setHeight(verticalOffset);
  //     };

  //     window.addEventListener("scroll", handleScroll);
  //     return () => {
  //       window.removeEventListener("scroll", handleScroll);
  //     };
  //   }, []);

  //   return height;
  // };

  useEffect(() => {
    setScrolledDistance(window.screenY);
  });

  const handleScroll = (e: Event) => {
    const verticalOffset =
      document.body.scrollTop || document.documentElement.scrollTop;
    const percentageVerticalOffset = window.innerHeight;

    setScrolledDistance(verticalOffset);
    console.log(verticalOffset);

    setBlur(`${(verticalOffset / percentageVerticalOffset) * 7}px`);
  };

  // window.addEventListener("scroll", (e: Event) => handleScroll(e));

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   window.addEventListener("scroll", (e: Event) => handleScroll(e));

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //     window.addEventListener("scroll", (e: Event) => handleScroll(e));
  //   };
  // });

  // const handleScroll = (e: Event) => {
  //   const verticalOffset =
  //     document.body.scrollTop || document.documentElement.scrollTop;
  //   const percentageVerticalOffset = window.innerHeight;

  //   console.log(verticalOffset);

  //   setScrolledDistance(verticalOffset / percentageVerticalOffset);
  // };
  const handleScrollT = (e: Event) => {
    const verticalOffset =
      document.body.scrollTop || document.documentElement.scrollTop;
    const percentageVerticalOffset = window.innerHeight;

    console.log(verticalOffset);

    // setBlur(`${(verticalOffset / percentageVerticalOffset) * 7}px`);
  };

  function useOutsideAlerter(ref: any) {
    useEffect(() => {
      function handleClickOutside(event: any) {
        if (ref.current && ref.current.offsetTop) {
          setScrolledDistance(ref.current.offsetTop);
        }
      }

      document.addEventListener("scroll", handleClickOutside);
      return () => {
        document.removeEventListener("scroll", handleClickOutside);
      };
    }, [ref]);
  }

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScrollT);

  //   return () => {
  //     window.removeEventListener("scroll", handleScrollT);
  //   };
  // });

  const testData = [
    {
      skill: "React",
      status: "Advanced",
      categories: ["All", "Code"],
      icon: "icons_react--white",
    },
    {
      skill: "JavaScript",
      status: "Advanced",
      categories: ["All", "Code"],
      icon: "icons_javascript--white",
    },
    {
      skill: "GraphQL",
      status: "Experienced",
      categories: ["All", "Code"],
      icon: "icons_graphql--white",
    },
    {
      skill: "HTML5",
      status: "Advanced",
      categories: ["All", "Code"],
      icon: "icons_html5--white",
    },
    {
      skill: "TypeScript",
      status: "Experienced",
      categories: ["All", "Code"],
      icon: "icons_typescript--white",
    },
    {
      skill: "CSS3",
      status: "Advanced",
      categories: ["All", "Code"],
      icon: "icons_css3--white",
    },
    {
      skill: "Jest",
      status: "Experienced",
      categories: ["All", "Code"],
      icon: "icons_jest--white",
    },
    {
      skill: "SASS",
      status: "Intermediate",
      categories: ["All", "Code"],
      icon: "icons_sass--white",
    },
    {
      skill: "jQuery",
      status: "Advanced",
      categories: ["All", "Code"],
      icon: "icons_jquery--white",
    },
    {
      skill: "Git",
      status: "Advanced",
      categories: ["All", "Code"],
      icon: "icons_git--white",
    },
    {
      skill: "BitBucket",
      status: "Advanced",
      categories: ["All", "Code"],
      icon: "icons_bitbucket--white",
    },
    {
      skill: "GitLab",
      status: "Advanced",
      categories: ["All", "Code"],
      icon: "icons_gitlab--white",
    },
    {
      skill: "Prototyping",
      status: "Advanced",
      categories: ["All", "Design"],
      icon: "icons_prototype--white",
    },
    {
      skill: "Figma",
      status: "Advanced",
      categories: ["All", "Design"],
      icon: "icons_figma--white",
    },
    {
      skill: "Wireframing",
      status: "Experienced",
      categories: ["All", "Design"],
      icon: "icons_wireframe--white",
    },
    {
      skill: "Interaction / UI design",
      status: "Advanced",
      categories: ["All", "Design"],
      icon: "icons_interaction--white",
    },
    {
      skill: "Journey mapping",
      status: "Experienced",
      categories: ["All", "Design"],
      icon: "icons_pin--white",
    },
    {
      skill: "Photoshop",
      status: "Advanced",
      categories: ["All", "Design"],
      icon: "icons_adobe-photoshop--white",
    },
    {
      skill: "Illustrator & Affinity Designer",
      status: "Advanced",
      categories: ["All", "Design"],
      icon: "icons_affinity-photo--white",
    },
    {
      skill: "Adobe XD",
      status: "Experienced",
      categories: ["All", "Design"],
      icon: "icons_adobeXd--white",
    },
    {
      skill: "Spline",
      status: "Beginner",
      categories: ["All", "Design"],
      icon: "icons_spline--white",
    },
    {
      skill: "UX research",
      status: "Beginner",
      categories: ["All", "Design"],
      icon: "icons_users--white",
    },
    {
      skill: "Content design",
      status: "Experienced",
      categories: ["All", "Design"],
      icon: "icons_edit--white",
    },
    {
      skill: "3D modelling",
      status: "Beginner",
      categories: ["All", "Design"],
      icon: "icons_3d--white",
    },
  ];

  const getRelevantSkills =
    filter === "All"
      ? testData
      : testData.filter((item) => item.categories[1] == filter);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScrollT);

  //   return () => {
  //     window.removeEventListener("scroll", handleScrollT);
  //   };
  // });

  return (
    <div
      className={`width-100 col center-xs middle-xs tabsGallery ${
        scrolledDistance < 400 ? null : "scrolling"
      }`}
      id="tabsGallery"
      // onScroll={(e: any) => handleScrollT(e)}
      style={{ filter: `blur(${blur})` }}
    >
      <TabsContext.Provider value={{ filter, setFilter }}>
        <Tabs data={data} heading={heading} />

        {/* <div className="row tabsGallery__container">
        {data.map((tab: any) => {
          return (
            <CheckboxItem
              label={tab.label}
              active={tab.label === filter}
              handleClick={() => setFilter(tab.label)}
            />
          );
        })}
      </div> */}

        <VerticalSpacing size="lg" />
        {children}
        <ItemsGrid filter={filter} data={getRelevantSkills} />
        {isMobile ? (
          <VerticalSpacing size="lg" />
        ) : (
          <VerticalSpacing size="xxl" />
        )}

        {/* {content[filter].map((content: any) => {
        return (

        )

      })} */}
      </TabsContext.Provider>
    </div>
  );
};

export default TabsGallery;
