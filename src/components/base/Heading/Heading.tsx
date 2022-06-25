import "./Heading.css";

interface IProps {
  children: string;
  colour: string;
  weight?: HeadingWeight;
  headingLevel: string;
  isSerifFont?: boolean;
  animate?: boolean;
}
export enum HeadingWeight {
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
  darkGrey = "var(--dark-grey)",
  darkBlack = "var(--dark-black)",
  lightBlack = "var(--light-black)",
  primary = "var(--primary)",
  primaryGreen = "var(--primary-green)",
  offWhite = "var(--off-white)",
  lightGrey = "var(--light-grey)",
}

const Heading = ({
  children,
  colour,
  weight,
  headingLevel,
  isSerifFont,
  animate,
}: IProps) => {
  if (headingLevel === "h4") {
    return (
      <h2
        className={`headingH4 ${isSerifFont && "serifHeading"} ${
          animate ? "slide-up" : undefined
        }`}
        style={{
          color: `${colour}`,
          fontWeight: `${weight}`,
        }}
      >
        {children}
      </h2>
    );
  }
  if (headingLevel === "h3") {
    return (
      <span className="curtain">
        <h2
          className={`headingH3 ${isSerifFont && "serifHeading"} ${
            animate ? "slide-up" : undefined
          }`}
          style={{
            color: `${colour}`,
            fontWeight: `${weight}`,
          }}
        >
          {children}
        </h2>
      </span>
    );
  }
  if (headingLevel === "h2") {
    return (
      <span className="curtain">
        <h2
          className={`headingH2 ${isSerifFont && "serifHeading"} ${
            animate ? "slide-up" : undefined
          }`}
          style={{
            color: `${colour}`,
            fontWeight: `${weight}`,
          }}
        >
          {children}
        </h2>
      </span>
    );
  }
  return (
    <span className="curtain">
      <h1
        className={`headingH1 ${isSerifFont && "serifHeading"} ${
          animate ? "slide-up" : undefined
        }`}
        style={{
          color: `${colour}`,
          fontWeight: `${weight}`,
        }}
      >
        {children}
      </h1>
    </span>
  );
};

export default Heading;
