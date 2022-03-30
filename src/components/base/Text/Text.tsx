import "./Text.css";

interface IProps {
  text?: string;
  size: TextSize;
  colour?: string;
  weight?: TextWeight;
  theme?: string;
  bold?: boolean;
  children?: any;
  opacity?: string;
  blur?: string | 0;
}

export enum TextSize {
  xxs = "text--xxs",
  xs = "text--xs",
  sm = "text--sm",
  md = "text--md",
  lg = "text--lg",
  xl = "text--xl",
  xxl = "text--xxl",
  xxxl = "text--xxxl",
}

export enum TextWeight {
  thin = "200",
  light = "300",
  regular = "400",
  medium = "500",
  semibold = "700",
  bold = "900",
}

export enum TextColour {
  white = "#fff",
  greyBlue = "var(--grey-blue)",
  deepBlue = "var(--deep-blue)",
  primaryDark = "var(--dark-primary)",
  primaryBlue = "var(--primary-blue)",
  primaryGreen = "var(--primary-green)",
  offWhite = "var(--off-white)",
  lightGrey = "var(--light-grey)",
}

const Text = ({
  text,
  size,
  colour,
  weight,
  theme,
  bold,
  opacity,
  children,
  blur,
}: IProps) => {
  if (bold) {
    return (
      <p
        className={`text ${size}`}
        style={{
          opacity: `${opacity}`,
          fontWeight: `${weight}`,
          color: `${colour}`,
          filter: `${blur && `blur(${blur})`}`,
        }}
      >
        {children}
      </p>
    );
  } else {
    return (
      <p
        className={`text ${size} text--${theme}`}
        style={{
          opacity: `${opacity}`,
          fontWeight: `${weight}`,
          color: `${colour}`,
          filter: `${blur && `blur(${blur})`}`,
        }}
      >
        {children}
      </p>
    );
  }
};

export default Text;
