import Text, { TextSize } from "../Text/Text";

import "./Tag.css";

interface IProps {
  text: string;
}

const Tag = ({ text }: IProps) => {
  return (
    <div className="tag">
      <Text size={TextSize.xs}>{text}</Text>
    </div>
  );
};

export default Tag;
