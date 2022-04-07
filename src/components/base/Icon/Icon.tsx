import Text, { TextColour, TextSize } from "../Text/Text";
import VerticalSpacing from "../VerticalSpacing/VerticalSpacing";
import "./Icon.css";

interface IProps {
  size: string;
  background?: Backgrounds;
  opacity?: string;
  border?: boolean;
  theme?: string;
  icon?: string;
  handleClick?: any;
  isButton?: boolean;
  label?: string;
  hoverText?: string;
  noleftMargin?: boolean;
}

export enum Backgrounds {
  white = "white",
  transparentWhite = "rgba(255, 255, 255, 0.4)",
  lightGrey = "var(--light-grey)",
}

const Icon = ({
  size,
  background,
  opacity,
  theme,
  border,
  icon,
  handleClick,
  isButton,
  label,
  hoverText,
  noleftMargin,
}: IProps) => {
  if (isButton) {
    return (
      <button
        className={`icon icon-button col justify-center align-center`}
        onClick={handleClick}
        style={background ? { background: `${background}` } : undefined}
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
        style={{
          opacity: `${opacity}`,
          paddingLeft: noleftMargin ? 0 : undefined,
        }}
      >
        <img
          src={`${process.env.PUBLIC_URL}/assets/${icon}.svg`}
          alt={icon}
          className={`icon--${size}`}
        />
        {hoverText ? (
          <div className="icon__text">
            <Text size={TextSize.md} colour={TextColour.lightBlack}>
              {label}
            </Text>
          </div>
        ) : null}
      </div>
    </span>
  );
};

export default Icon;
