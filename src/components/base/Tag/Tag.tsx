import { Colours } from "../../../constants/globalConstants";
import Text, { TextColour, TextSize } from "../Text/Text";

import "./Tag.css";

interface IProps {
  text: string;
}

const Tag = ({ text }: IProps) => {
  return (
    <div className="tag">
      <Text colour={Colours.white} size={TextSize.xs}>
        {text}
      </Text>
    </div>
  );
};

export default Tag;
