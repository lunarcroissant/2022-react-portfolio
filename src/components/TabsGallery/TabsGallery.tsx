import { ReactNode, useEffect, useState } from "react";
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
      status: "Experienced",
      categories: ["All", "Code"],
    },
    {
      skill: "JavaScript",
      status: "Experienced",
      categories: ["All", "Code"],
    },
    {
      skill: "GraphQL",
      status: "Experienced",
      categories: ["All", "Code"],
    },
    {
      skill: "HTML5",
      status: "Experienced",
      categories: ["All", "Code"],
    },
    {
      skill: "TypeScript",
      status: "Experienced",
      categories: ["All", "Code"],
    },
    {
      skill: "CSS3",
      status: "Experienced",
      categories: ["All", "Code"],
    },
    {
      skill: "Jest",
      status: "Experienced",
      categories: ["All", "Code"],
    },
    {
      skill: "jQuery",
      status: "Experienced",
      categories: ["All", "Code"],
    },
    {
      skill: "Git",
      status: "Experienced",
      categories: ["All", "Code"],
    },
    {
      skill: "BitBucket",
      status: "Experienced",
      categories: ["All", "Code"],
    },
    {
      skill: "GitLab",
      status: "Experienced",
      categories: ["All", "Code"],
    },
    {
      skill: "Prototyping",
      status: "Experienced",
      categories: ["All", "Design"],
    },
    {
      skill: "Figma",
      status: "Experienced",
      categories: ["All", "Design"],
    },
    {
      skill: "Wireframing",
      status: "Experienced",
      categories: ["All", "Design"],
    },
    {
      skill: "Interaction / UI design",
      status: "Experienced",
      categories: ["All", "Design"],
    },
    {
      skill: "Journey mapping",
      status: "Experienced",
      categories: ["All", "Design"],
    },
    {
      skill: "Photoshop",
      status: "Experienced",
      categories: ["All", "Design"],
    },
    {
      skill: "Illustrator & Affinity Designer",
      status: "Experienced",
      categories: ["All", "Design"],
    },
    {
      skill: "Adobe XD",
      status: "Experienced",
      categories: ["All", "Design"],
    },
    {
      skill: "Spline",
      status: "Experienced",
      categories: ["All", "Design"],
    },
    {
      skill: "Basic UX research",
      status: "Experienced",
      categories: ["All", "Design"],
    },
    {
      skill: "Content design",
      status: "Experienced",
      categories: ["All", "Design"],
    },
    {
      skill: "3D modelling",
      status: "Experienced",
      categories: ["All", "Design"],
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
        <VerticalSpacing size="xl" />
        <VerticalSpacing size="xl" />
        {/* {content[filter].map((content: any) => {
        return (

        )

      })} */}
      </TabsContext.Provider>
    </div>
  );
};

export default TabsGallery;
