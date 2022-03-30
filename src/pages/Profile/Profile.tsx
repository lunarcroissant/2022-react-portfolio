import { useEffect, useState } from "react";
import Heading, { TextColour } from "../../components/base/Heading/Heading";
import Text, { LineHeight, TextSize } from "../../components/base/Text/Text";
import VerticalSpacing from "../../components/base/VerticalSpacing/VerticalSpacing";
import Divider from "../../components/Divider/Divider";
import Header from "../../components/global/Header/Header";
import SplitScreen from "../../components/SplitScreen/SplitScreen";
import TabsContent from "../../components/TabsGallery/TabsContent/TabsContent";
import TabsGallery from "../../components/TabsGallery/TabsGallery";
import ItemsGrid from "./components/ItemsGrid/ItemsGrid";
import ItemTile from "./components/ItemTile/ItemTile";

import "./Profile.css";

interface IProps {
  data: any;
}

const Profile = ({ data }: IProps) => {
  const verticalOffset =
    document.body.scrollTop || document.documentElement.scrollTop;
  const percentageVerticalOffset = window.innerHeight;

  const [scrolledDistance, setScrolledDistance] = useState(window.screenY);
  const [blur, setBlur] = useState("0px");

  const handleScroll = (e: Event) => {
    const verticalOffset =
      document.body.scrollTop || document.documentElement.scrollTop;
    const percentageVerticalOffset = window.innerHeight;

    setScrolledDistance(verticalOffset);
    setBlur(`${(verticalOffset / percentageVerticalOffset) * 50}px`);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <div
      className="profile col align-center justify-c"
      onScroll={(e: any) => handleScroll(e)}
    >
      <span className="profile__fade1"></span>
      <span className="profile__fade2"></span>
      <Header
        linkLabels={[
          { label: "Work", urlPath: "/" },
          { label: "Profile", urlPath: "/profile" },
          // { label: "Testimonials", urlPath: "/testimonials" },
          // { label: "Contact", urlPath: "/contact" },
        ]}
      />
      {/* <SplitScreen
        heading=" Hallo, I'm Eddie"
        copy="I’m a British/German UI/UX Designer and Front-End Developer that loves
          to bridge the gap between amazing design and technical implementation."
        imageURL="profileImage.jpg"
        primaryCTA="See skills overview"
        secondaryCTA="Read Testimonials"
      /> */}

      {/* <svg viewBox="0 0 5vw 5vw">
        <path
          id="curve"
          d="
        M cx - r, cy
        a r,r 0 1,0 (r * 2),0
        a r,r 0 1,0 -(r * 2),0
    "
        />
        <text width="5vw">
          <textPath xlinkHref="#curve">Dangerous Curves Ahead</textPath>
        </text>
      </svg> */}
      <VerticalSpacing size="xl" />
      <VerticalSpacing size="xl" />
      <VerticalSpacing size="xl" />

      <div className="profile__contentColumn">
        <h1 className="profile__heading">
          <span
            className="profile__headingStandBack"
            style={{ filter: `blur(${blur})` }}
          >
            Hey! I'm{" "}
            <a href="" className="profile__headingLink">
              Eddie
            </a>
            , a British/German{" "}
          </span>
          <span
            className="profile__headingStandOut"
            style={{ filter: `blur(0)` }}
          >
            UI/UX Designer and Front-End Developer{" "}
          </span>
          <span
            className="profile__headingStandBack"
            style={{ filter: `blur(${blur})` }}
          >
            {""}based in{" "}
            {/* <a href="" className="profile__headingLink">
              London
            </a> */}
          </span>
          <span
            className="profile__headingStandOut"
            style={{ filter: `blur(0)` }}
          >
            London
          </span>
          <span
            className="profile__headingStandBack"
            style={{ filter: `blur(${blur})` }}
          >
            .
          </span>
        </h1>
        <VerticalSpacing size="lg" />
        <Text
          lineHeight={LineHeight.standard}
          size={TextSize.lg}
          colour={TextColour.offWhite}
          blur={blur}
        >
          I’m a British/German UI/UX Designer and Front-End Developer that loves
          to bridge the gap between amazing design and technical implementation.
          I strive to create beautiful digital experiences that balance creative
          design with practical needs.
        </Text>
        <VerticalSpacing size="md" />
        <Text
          lineHeight={LineHeight.standard}
          size={TextSize.lg}
          colour={TextColour.offWhite}
          blur={blur}
        >
          Having worked in Marketing, Product Management and Sales, I make sure
          to understand and consider the business needs of every project.{" "}
        </Text>
      </div>
      <VerticalSpacing size="xxl" />
      {/* <VerticalSpacing size="xl" />
      <VerticalSpacing size="xl" />
      <VerticalSpacing size="xl" /> */}
      {/* <div className="width-100 row justify-center align-center profile__heading">
        <Heading colour={TextColour.white}>What I help with</Heading>
        <VerticalSpacing size="xl" />
      </div> */}

      <TabsGallery
        data={[
          { label: "All", active: true },
          { label: "Design", active: true },
          { label: "Code", active: true },
        ]}
        heading="What I help with"
      />
      <VerticalSpacing size="xxl" />
      {/* <Divider>
        <Text size={TextSize.md}>More coming soon</Text>
      </Divider> */}
      {/* <ItemTile label="Tetsing" subInfo="Decent" /> */}
    </div>
  );
};

export default Profile;
