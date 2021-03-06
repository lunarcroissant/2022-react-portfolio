import { useContext, useEffect, useState } from "react";
import Heading, { TextColour } from "../../components/base/Heading/Heading";
import Icon, { Backgrounds } from "../../components/base/Icon/Icon";
import Text, {
  LineHeight,
  TextSize,
  TextWeight,
} from "../../components/base/Text/Text";
import VerticalSpacing from "../../components/base/VerticalSpacing/VerticalSpacing";
import Header from "../../components/global/Header/Header";
import MobileMenu from "../../components/global/MobileMenu/MobileMenu";
import TabsGallery from "../../components/TabsGallery/TabsGallery";
import GlobalContext from "../../contexts/GlobalContext/GlobalContext";
import useViewportSize from "../../hooks/useViewportSize/useViewportSize";
import Footer from "./components/Footer/Footer";

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
  const [autoScrolling, setAutoScrolling] = useState(false);
  const { mobileMenuVisible, setMobileMenuVisible } = useContext(GlobalContext);

  const isMobile = useViewportSize(1024);

  const handleScroll = (e: Event) => {
    const verticalOffset =
      document.body.scrollTop || document.documentElement.scrollTop;
    const percentageVerticalOffset = window.innerHeight;

    setScrolledDistance(verticalOffset);
    setBlur(`${(verticalOffset / percentageVerticalOffset) * 50}px`);
  };

  const scrollingZone = document.querySelector(
    "profile__glowBallAnimationWrapper"
  ) as HTMLElement;

  let currentY = 0;

  let aimY = 400;

  let speed = 0.2;

  const animateScrollingOnHover = function () {
    var distancePerSec = 1000;

    var h = document.body.getBoundingClientRect().height;
    var targetScrollTop = h - window.screenY;
    var distanceToTravel = targetScrollTop - window.scrollY;

    currentY += (targetScrollTop - window.screenY) * speed;

    if (scrollingZone) {
      // scrollingZone.style. = currentY + "px";
      window.scrollTo({ top: currentY });
      window.screenTop = currentY;
    }

    requestAnimationFrame(animateScrollingOnHover);
  };

  // document.addEventListener("mouseover", function () {
  //   var distancePerSec = 1000;

  //   var h = document.body.getBoundingClientRect().height;
  //   var targetScrollTop = h - window.screenY;
  //   var distanceToTravel = targetScrollTop - window.scrollY;
  //   var animationDuration = (distanceToTravel / distancePerSec) * 1000;
  // });

  function startScrolling() {
    if (!autoScrolling) {
      setAutoScrolling(true);
      window.scroll({
        top: 1000,
        behavior: "smooth",
      });
    }
  }

  // function stopScrolling() {
  //   setAutoScrolling(false);
  //   // window.scroll(0, 1000);
  // }

  animateScrollingOnHover();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <div className="profile col" onScroll={(e: any) => handleScroll(e)}>
      <Header
        linkLabels={[
          { label: "Work", urlPath: "/" },
          { label: "Profile", urlPath: "/profile" },
        ]}
      />

      <MobileMenu links={["Profile"]} />

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

      <div className="profile__contentColumn col justify-end">
        {/* {isMobile ? null : (
          <>
            <VerticalSpacing size="xl" />
          </>
        )}
        <VerticalSpacing size="xl" />
        <VerticalSpacing size="xl" /> */}
        <div className="profile__glowBallAnimationWrapper">
          <div className="profile__glowballWrapper">
            <div
              className="profile__glowball"
              onMouseOver={() => startScrolling()}
            ></div>
          </div>
          <div className="profile__glowballWrapper1">
            <div
              className="profile__glowball1"
              onMouseOver={() => startScrolling()}
            ></div>
          </div>
        </div>
        <h1 className="profile__heading">
          <span
            className="profile__headingStandBack"
            style={{ filter: `blur(${blur})` }}
          >
            Hey! I'm{" "}
            <a href="" className="profile__headingLink">
              Eddie
            </a>
            , a{" "}
          </span>
          <span
            className="profile__headingStandOut"
            style={{ filter: `blur(0)` }}
          >
            Digital Product Designer and Front-End Developer{" "}
          </span>
          <span
            className="profile__headingStandBack"
            style={{ filter: `blur(${blur})` }}
          >
            {""}originally from Germany based{" "}
            {/* <a href="" className="profile__headingLink">
              London
            </a> */}
          </span>
          <span
            className="profile__headingStandOut"
            style={{ filter: `blur(0)` }}
          >
            in London
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
          weight={TextWeight.light}
          opacity={"0.9"}
          blur={blur}
        >
          I love bridging the gap between amazing design and technical
          implementation with the ultimate goal of building useful, scalable and
          beautiful digital experiences.
        </Text>
        <VerticalSpacing size="md" />
        <Text
          lineHeight={LineHeight.standard}
          size={TextSize.lg}
          colour={TextColour.offWhite}
          weight={TextWeight.light}
          opacity={"0.9"}
          blur={blur}
        >
          I've been working in digital product design for four years, both
          professionally, for companies ranging from BT Group to brand-new
          start-ups, and through personal projects. Two years ago I decided to
          learn web developement as well, not only to bring designs to life, but
          also to keep improving as a designer.{" "}
        </Text>
        <VerticalSpacing size="md" />
      </div>

      {/* <VerticalSpacing size="xl" />
      <VerticalSpacing size="xl" />
      <VerticalSpacing size="xl" /> */}
      {/* <div className="width-100 row justify-center align-center profile__heading">
        <Heading colour={TextColour.white}>What I help with</Heading>
        <VerticalSpacing size="xl" />
      </div> */}
      <VerticalSpacing size="xxl" />
      <TabsGallery
        data={[
          { label: "All", active: true },
          { label: "Design", active: true },
          { label: "Code", active: true },
        ]}
        heading="What I help with"
      />
      {/* <VerticalSpacing size="xxl" /> */}
      <Footer />
      {/* <Divider>
        <Text size={TextSize.md}>More coming soon</Text>
      </Divider> */}
      {/* <ItemTile label="Tetsing" subInfo="Decent" /> */}
    </div>
  );
};

export default Profile;
