import Heading, {
  HeadingWeight,
  TextColour,
} from "../../../../../../components/base/Heading/Heading";
import Text, {
  LineHeight,
  TextSize,
} from "../../../../../../components/base/Text/Text";
import VerticalSpacing from "../../../../../../components/base/VerticalSpacing/VerticalSpacing";

import "./NumberedItem.css";

interface IProps {
  data: any;
  number: string | number;
}

const NumberedItem = ({ data, number }: IProps) => {
  const { heading, copy } = data;
  return (
    <div className="col numberedItem">
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
        size={TextSize.sm}
        colour={TextColour.lightBlack}
        lineHeight={LineHeight.standard}
      >
        {copy}
      </Text>
      {/* <VerticalSpacing size="lg" /> */}
    </div>
  );
};

export default NumberedItem;
