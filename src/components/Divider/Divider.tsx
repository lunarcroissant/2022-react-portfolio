import { ReactNode } from "react";
import Text, { TextColour, TextSize } from "../base/Text/Text";
import "./Divider.css";

interface IProps {
  children: string | ReactNode;
  dark?: boolean;
}

const Divider = ({ children, dark }: IProps) => {
  if (dark) {
    return (
      <div className="divider--dark row justify-between align-center width-100">
        <div className="divider--dark__leftArm"></div>
        <Text size={TextSize.lg} colour={TextColour.lightGrey}>
          {children}
        </Text>
        <div className="divider--dark__rightArm"></div>
      </div>
    );
  }
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
