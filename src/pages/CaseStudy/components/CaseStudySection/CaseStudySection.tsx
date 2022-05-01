import { memo, ReactNode } from "react";
import Heading, {
  HeadingWeight,
  TextColour,
} from "../../../../components/base/Heading/Heading";
import Text, {
  LineHeight,
  TextSize,
} from "../../../../components/base/Text/Text";
import VerticalSpacing from "../../../../components/base/VerticalSpacing/VerticalSpacing";

import "./CaseStudySection.css";
import CaseImage from "./components/CaseImage/CaseImage";

interface IProps {
  heading: string;
  subHeading?: string;
  bodyText: string;
  image?: string;
  children?: ReactNode;
}

const CaseStudySection = ({
  heading,
  subHeading,
  bodyText,
  image,
  children,
}: IProps) => {
  return (
    <div
      className="caseStudySection width-100 col"
      key={`caseStudySection_${heading}`}
    >
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
          <Text
            size={TextSize.lg}
            colour={TextColour.lightBlack}
            lineHeight={LineHeight.standard}
          >
            {bodyText}
          </Text>
        </>
      )}

      <VerticalSpacing size="lg" />
      {image && <CaseImage image={image} />}
      {children}
      <VerticalSpacing size="xxl" />
    </div>
  );
};

export default memo(CaseStudySection);
