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
import CaseAsset from "./components/CaseAsset/CaseAsset";

interface IProps {
  heading: string;
  subHeading?: string;
  bodyText: string;
  asset?: string;
  assetType?: string;
  assetAlt?: string;
  children?: ReactNode;
}

const CaseStudySection = ({
  heading,
  subHeading,
  bodyText,
  asset,
  assetType,
  assetAlt,
  children,
}: IProps) => {
  console.log(asset);
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
      {asset && (
        <CaseAsset asset={asset} assetAlt={assetAlt} assetType={assetType} />
      )}
      {children}
      <VerticalSpacing size="xxl" />
    </div>
  );
};

export default memo(CaseStudySection);
