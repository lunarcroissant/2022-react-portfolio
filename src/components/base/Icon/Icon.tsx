import "./Icon.css";

interface IProps {
  size: string;
  opacity?: string;
  border?: boolean;
  theme?: string;
  icon?: string;
  handleClick?: any;
  isButton?: boolean;
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
  hoverText,
}: IProps) => {
  if (isButton) {
    return (
      <button
        className="icon row justify-center align-center"
        onClick={handleClick}
      >
        <img
          src={`${process.env.PUBLIC_URL}/assets/${icon}.svg`}
          alt={icon}
          className={`icon--${size}`}
        />
      </button>
    );
  }
  return (
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
  );
};

export default Icon;
