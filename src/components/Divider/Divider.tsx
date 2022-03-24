import Text, { TextColour, TextSize } from "../base/Text/Text";
import "./Divider.css";

interface IProps {
  children: string;
}

const Divider = ({ children }: IProps) => {
  return (
    <div className="divider row justify-center align-center width-100">
      <div className="divider__leftArm"></div>
      <Text size={TextSize.lg} colour={TextColour.lightGrey}>
        {children}
      </Text>
      <div className="divider__rightArm"></div>
    </div>
  );
};

export default Divider;
