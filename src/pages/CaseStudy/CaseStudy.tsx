import CaseStudyHeader from "./components/CaseStudyHeader/CaseStudyHeader";
import CaseStudySection from "./components/CaseStudySection/CaseStudySection";
import NumberedItem from "./components/CaseStudySection/components/NumberedItem/NumberedItem";
import AutoFitRow from "../../components/base/AutoFitRow/AutoFitRow";
import Text, {
  LineHeight,
  TextColour,
  TextSize,
} from "../../components/base/Text/Text";
import { useContext, useEffect, useState } from "react";
import PageContext from "../../contexts/PageContext/PageContext";

import "./CaseStudy.css";
import { NavLink } from "react-router-dom";
import useViewportSize from "../../hooks/useViewportSize/useViewportSize";
import Icon from "../../components/base/Icon/Icon";

interface IProps {
  data: any;
}

const CaseStudy = ({ data }: IProps) => {
  const {
    heading,
    subHeading,
    image,
    goals,
    team,
    tools,
    articleSections,
    projectLink,
    backgroundColour,
  } = data;

  const [scrollingHeader, setScrollingHeader] = useState(false);

  const isMobile = useViewportSize(1024);

  const { setShowCaseStudy } = useContext(PageContext);

  const measureScrolledDistance = (event: React.UIEvent<HTMLDivElement>) => {
    // let scrollDistance = document.querySelector("caseStudy")?.scrollTop;
    const eventTarget = event.target as HTMLDivElement;
    let scrollDistance = eventTarget.scrollTop;

    if (scrollDistance! > 0) {
      setScrollingHeader(true);
    } else {
      setScrollingHeader(false);
    }
  };

  // document.addEventListener("scroll", measureScrolledDistance);

  // useEffect(() => {}, [scrollingHeader]);

  function hexToRgbA(hex: string) {
    var c: any;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
      c = hex.substring(1).split("");
      if (c.length == 3) {
        c = [c[0], c[0], c[1], c[1], c[2], c[2]];
      }
      c = "0x" + c.join("");
      return (
        "rgba(" + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") + ",0.8)"
      );
    }
    throw new Error("Bad Hex");
  }

  hexToRgbA(backgroundColour);

  return (
    <>
      <div className="caseStudy__scrollHeaderContainer width-100">
        <div
          className={`caseStudy__scrollHeader width-100 row align-center justify-between ${
            scrollingHeader ? "visibleOnScroll" : null
          }`}
          style={{
            backgroundColor: `${
              isMobile
                ? hexToRgbA(backgroundColour)
                : "rgba(255, 255, 255, 0.8)"
            }`,
          }}
        >
          {isMobile ? (
            <NavLink
              to={`/`}
              className={"row header__logo"}
              key={"HomeLogoLink"}
            >
              {/* <a className="header__home row"> */}
              {/* <img
                src={`${process.env.PUBLIC_URL}/assets/EddieTierneyLogo.svg`}
                alt=""
                className="header__homeIcon"
              /> */}
              <span className="margin-right-1">
                <Icon
                  size="xl"
                  icon="EddieTierneyLogo"
                  padding={"0rem"}
                  noleftMargin
                />
              </span>

              <div className="col">
                <Text size={TextSize.sm} colour={TextColour.white}>
                  Eddie
                </Text>
                <Text size={TextSize.sm} colour={TextColour.white}>
                  Tierney
                </Text>
              </div>
              {/* </a> */}
            </NavLink>
          ) : (
            <Text
              size={TextSize.lg}
              colour={TextColour.lightBlack}
              lineHeight={LineHeight.standard}
            >
              {heading}
            </Text>
          )}
          <button
            className="caseStudyHeader__backButton"
            onClick={() => setShowCaseStudy(false)}
          >
            {isMobile ? (
              <Text size={TextSize.xs} colour={TextColour.white}>
                Back to projects
              </Text>
            ) : (
              <Text size={TextSize.md} colour={TextColour.lightBlack}>
                Back to projects
              </Text>
            )}
          </button>
        </div>
      </div>
      <section
        className="caseStudy width-100"
        onScroll={measureScrolledDistance}
      >
        <CaseStudyHeader
          heading={heading}
          bodyText={subHeading}
          teamMates={team}
          toolsUsed={tools}
          projectLink={projectLink}
        />
        <CaseStudySection heading={goals.heading} bodyText={goals.subHeading}>
          <div className="caseStudy__goals">
            {goals.goals.map((goals: any, index: number) => {
              return <NumberedItem data={goals} number={`0${index + 1}`} />;
            })}
          </div>
        </CaseStudySection>
        {articleSections &&
          articleSections.map((section: any) => {
            return (
              <CaseStudySection
                heading={section.heading}
                bodyText={section.copy}
              >
                {/* {section.list && (
                  // <AutoFitRow minimumWidth={200} maximumWidth={"33%"}>
                  <div className="caseStudy__goals">
                    {section.list.map((goals: any, index: number) => {
                      return (
                        <NumberedItem data={goals} number={`0${index + 1}`} />
                      );
                    })}
                  </div>
                  // </AutoFitRow>
                )} */}
                {section.image && (
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/caseStudyImages/${section.image}`}
                    alt={section.imageAlt}
                    className="caseStudy__image"
                  />
                )}
              </CaseStudySection>
            );
          })}
      </section>
    </>
  );
};

export default CaseStudy;
