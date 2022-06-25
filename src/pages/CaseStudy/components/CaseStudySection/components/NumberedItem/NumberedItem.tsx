import { memo } from "react";
import Heading, {
  HeadingWeight,
  TextColour,
} from "../../../../../../components/base/Heading/Heading";
import Text, {
  LineHeight,
  TextSize,
} from "../../../../../../components/base/Text/Text";
import VerticalSpacing from "../../../../../../components/base/VerticalSpacing/VerticalSpacing";
import useViewportSize from "../../../../../../hooks/useViewportSize/useViewportSize";

import "./NumberedItem.css";

interface IProps {
  data: any;
  number: string | number;
}

const NumberedItem = ({ data, number }: IProps) => {
  const { heading, copy } = data;
  const isMobile = useViewportSize(1024);
  return (
    <div className="col numberedItem">
      {isMobile ? <VerticalSpacing size="md" /> : null}
      <Text size={TextSize.lg} colour={TextColour.lightGrey}>
        {number}
      </Text>
      <VerticalSpacing size="xs" />
      <Heading
        colour={TextColour.darkBlack}
        weight={HeadingWeight.medium}
        headingLevel="h3"
      >
        {heading}
      </Heading>
      <VerticalSpacing size="xs" />
      <Text
        size={TextSize.lg}
        colour={TextColour.lightBlack}
        lineHeight={LineHeight.standard}
      >
        {copy}
      </Text>
      {/* <VerticalSpacing size="lg" /> */}
    </div>
  );
};

export default memo(NumberedItem);
