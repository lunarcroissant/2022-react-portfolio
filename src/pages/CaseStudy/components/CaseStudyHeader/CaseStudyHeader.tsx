import { ReactNode, useContext } from "react";
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

interface IProps {
  heading: string;
  subHeading?: string;
  bodyText: string;
  teamMates: any;
  toolsUsed: any;
}

const CaseStudyHeader = ({
  heading,
  subHeading,
  bodyText,
  teamMates,
  toolsUsed,
}: IProps) => {
  const { setShowCaseStudy } = useContext(PageContext);
  return (
    <div className="caseStudyHeader width-100">
      <VerticalSpacing size="xl" />
      <div className="caseStudyHeader__content justify-between">
        <div className="col">
          <div className="row">
            <Heading
              colour={TextColour.darkBlack}
              weight={HeadingWeight.light}
              headingLevel="h1"
            >
              {heading}
            </Heading>
            <Icon size="md" icon="icons_45degArrow" />
          </div>

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
          <ItemsList title="Team" copy={teamMates} key={Math.random()} />
          <ItemsList
            title="Tools"
            copy={toolsUsed}
            icons={toolsUsed}
            key={Math.random()}
          />
        </div>
        <button
          className="caseStudyHeader__backButton"
          onClick={() => setShowCaseStudy(false)}
        >
          <Text size={TextSize.md} colour={TextColour.lightBlack}>
            Back to projects
          </Text>
        </button>
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

export default CaseStudyHeader;
