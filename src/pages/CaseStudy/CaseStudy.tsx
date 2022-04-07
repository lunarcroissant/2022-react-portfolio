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
  } = data;

  const [scrollingHeader, setScrollingHeader] = useState(false);

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

  return (
    <>
      <div className="caseStudy__scrollHeaderContainer width-100">
        <div
          className={`caseStudy__scrollHeader width-100 row align-center justify-between ${
            scrollingHeader ? "visibleOnScroll" : null
          }`}
        >
          <Text
            size={TextSize.lg}
            colour={TextColour.lightBlack}
            lineHeight={LineHeight.standard}
          >
            {heading}
          </Text>
          <button
            className="caseStudyHeader__backButton"
            onClick={() => setShowCaseStudy(false)}
          >
            <Text size={TextSize.md} colour={TextColour.lightBlack}>
              Back to projects
            </Text>
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
