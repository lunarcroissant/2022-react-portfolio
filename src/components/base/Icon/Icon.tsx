import Text, { TextColour, TextSize } from "../Text/Text";
import VerticalSpacing from "../VerticalSpacing/VerticalSpacing";
import "./Icon.css";

interface IProps {
  size: string;
  opacity?: string;
  border?: boolean;
  theme?: string;
  icon?: string;
  handleClick?: any;
  isButton?: boolean;
  label?: string;
  hoverText?: string;
}

const Icon = ({
  size,
  opacity,
  theme,
  border,
  icon,
  handleClick,
  isButton,
  label,
  hoverText,
}: IProps) => {
  if (isButton) {
    return (
      <button
        className="icon icon-button col justify-center align-center"
        onClick={handleClick}
      >
        <img
          src={`${process.env.PUBLIC_URL}/assets/${icon}.svg`}
          alt={icon}
          className={`icon--${size}`}
        />
        {label ? (
          <>
            <VerticalSpacing size="sm" />
            <Text size={TextSize.md} colour={TextColour.offWhite}>
              {label}
            </Text>
          </>
        ) : null}
      </button>
    );
  }
  return (
    <span className="display-inline">
      <div
        className={
          border || isButton ? `icon icon-button icon--${border}-white` : `icon`
        }
        onClick={handleClick}
        style={{ opacity: `${opacity}` }}
      >
        <img
          src={`${process.env.PUBLIC_URL}/assets/${icon}.svg`}
          alt={icon}
          className={`icon--${size}`}
        />
      </div>
    </span>
  );
};

export default Icon;
