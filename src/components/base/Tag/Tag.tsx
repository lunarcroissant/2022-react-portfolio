import Text, { TextSize } from "../Text/Text";

import "./Tag.css";

interface IProps {
  text: string;
}

const Tag = ({ text }: IProps) => {
  return (
    <div className="tag">
      <Text text={text} textSize={TextSize.xs} />
    </div>
  );
};

export default Tag;
