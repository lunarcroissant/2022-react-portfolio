import { memo, ReactNode, useContext } from "react";
import Heading, {
  HeadingWeight,
  TextColour,
} from "../../../../components/base/Heading/Heading";
import Icon from "../../../../components/base/Icon/Icon";
import Text, {
  LineHeight,
  TextSize,
} from "../../../../components/base/Text/Text";
import VerticalSpacing from "../../../../components/base/VerticalSpacing/VerticalSpacing";
import ItemsList from "./components/ItemsList/ItemsList";

import "./CaseStudyHeader.css";
import PageContext from "../../../../contexts/PageContext/PageContext";
import useViewportSize from "../../../../hooks/useViewportSize/useViewportSize";

interface IProps {
  heading: string;
  subHeading?: string;
  bodyText: string;
  teamMates: any;
  toolsUsed: any;
  projectLink?: string;
}

const CaseStudyHeader = ({
  heading,
  subHeading,
  bodyText,
  teamMates,
  toolsUsed,
  projectLink,
}: IProps) => {
  const { setShowCaseStudy } = useContext(PageContext);
  const isMobile = useViewportSize(1024);

  return (
    <div className="caseStudyHeader width-100">
      <VerticalSpacing size={isMobile ? "undefined" : "xl"} />
      <div className="caseStudyHeader__content justify-between">
        <div className="col">
          {projectLink ? (
            <a
              className="row caseStudyHeader__liveLink"
              href={projectLink}
              target="_blank"
            >
              <Heading
                colour={TextColour.darkBlack}
                weight={HeadingWeight.light}
                headingLevel="h1"
              >
                {heading}
              </Heading>
              <Icon size="md" icon="icons_45degArrow" />
            </a>
          ) : (
            <Heading
              colour={TextColour.darkBlack}
              weight={HeadingWeight.light}
              headingLevel="h1"
            >
              {heading}
            </Heading>
          )}

          <VerticalSpacing size="md" />
          <Text
            size={TextSize.lg}
            colour={TextColour.lightBlack}
            lineHeight={LineHeight.standard}
          >
            {bodyText}
          </Text>
        </div>

        <div className="col">
          {isMobile ? <VerticalSpacing size="md" /> : null}
          <ItemsList title="Team" copy={teamMates} key={"CaseStudyTeam"} />
          {isMobile ? <VerticalSpacing size="md" /> : null}
          <ItemsList
            title="Tools"
            copy={toolsUsed}
            icons={toolsUsed}
            key={"CaseStudyTools"}
          />
        </div>

        {!isMobile ? (
          <button
            className="caseStudyHeader__backButton"
            onClick={() => setShowCaseStudy(false)}
          >
            <Text size={TextSize.md} colour={TextColour.lightBlack}>
              Back to projects
            </Text>
          </button>
        ) : null}
      </div>
      <VerticalSpacing size="lg" />
      {/* <Heading colour={TextColour.primary} headingLevel="h1">
        {heading}
      </Heading>
      <VerticalSpacing size="md" />
      <Text size={TextSize.lg}>{bodyText}</Text>
      <div className="caseStudyHeader__divider"></div> */}
    </div>
  );
};

export default memo(CaseStudyHeader);
