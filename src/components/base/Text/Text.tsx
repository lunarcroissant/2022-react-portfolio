import "./Text.css";

interface IProps {
  text: string;
  textSize: TextSize;
  theme?: string;
  bold?: boolean;
  children?: any;
  opacity?: string;
}

export enum TextSize {
  xxs = "text--xxs",
  xs = "text--xs",
  sm = "text--sm",
  md = "text--md",
  lg = "text--lg",
  xl = "text--xl",
}

const Text = ({ text, textSize, theme, bold, opacity }: IProps) => {
  if (bold) {
    return (
      <p className={`text ${textSize}`} style={{ opacity: `${opacity}` }}>
        {text}
      </p>
    );
  } else {
    return (
      <p
        className={`text ${textSize} text--${theme}`}
        style={{ opacity: `${opacity}` }}
      >
        {text}
      </p>
    );
  }
};

export default Text;
