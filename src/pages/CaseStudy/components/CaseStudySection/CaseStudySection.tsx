import { memo, ReactNode } from "react";
import Heading, {
  HeadingWeight,
  TextColour,
} from "../../../../components/base/Heading/Heading";
import Text, { TextSize } from "../../../../components/base/Text/Text";
import VerticalSpacing from "../../../../components/base/VerticalSpacing/VerticalSpacing";

import "./CaseStudySection.css";

interface IProps {
  heading: string;
  subHeading?: string;
  bodyText: string;
  children: ReactNode;
}

const CaseStudySection = ({
  heading,
  subHeading,
  bodyText,
  children,
}: IProps) => {
  return (
    <div className="caseStudySection width-100 col">
      <div className="caseStudySection__divider width-100"></div>
      <VerticalSpacing size="xl" />
      <Heading
        colour={TextColour.darkBlack}
        weight={HeadingWeight.regular}
        headingLevel="h2"
      >
        {heading}
      </Heading>

      {bodyText && (
        <>
          <VerticalSpacing size="md" />
          <Text size={TextSize.lg} colour={TextColour.lightBlack}>
            {bodyText}
          </Text>
        </>
      )}

      <VerticalSpacing size="lg" />
      {children}
      <VerticalSpacing size="xxl" />
    </div>
  );
};

export default memo(CaseStudySection);
