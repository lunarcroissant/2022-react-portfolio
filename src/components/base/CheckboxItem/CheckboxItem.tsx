import Text, { TextColour, TextSize } from "../Text/Text";

import "./CheckboxItem.css";

interface IProps {
  label: string;
  handleClick: (value: any) => void;
  active: boolean;
}

const CheckboxItem = ({ label, active, handleClick }: IProps) => {
  return (
    <div
      className={`checkboxitem row align-center justify-center padding-2 ${
        active ? "checkboxitem--active" : null
      }`}
      onClick={handleClick}
    >
      <input type="checkbox" id={label} />
      <Text
        // colour={TextColour.primaryDark}
        size={TextSize.sm}
        // theme="primary-colour"
      >
        {label}
      </Text>
    </div>
  );
};

export default CheckboxItem;
