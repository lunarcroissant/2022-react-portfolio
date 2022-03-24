import "./Heading.css";

interface IProps {
  children: string;
  colour: string;
  headingLevel: string;
}

export enum TextColour {
  white = "#fff",
  greyBlue = "var(--grey-blue)",
  darkGrey = "var(--dark-grey)",
  primary = "var(--primary)",
  primaryGreen = "var(--primary-green)",
  offWhite = "var(--off-white)",
  lightGrey = "var(--light-grey)",
}

const Heading = ({ children, colour, headingLevel }: IProps) => {
  if (headingLevel === "h3") {
    return (
      <h2
        className="headingH3"
        style={{
          color: `${colour}`,
        }}
      >
        {children}
      </h2>
    );
  }
  if (headingLevel === "h2") {
    return (
      <h2
        className="headingH1"
        style={{
          color: `${colour}`,
        }}
      >
        {children}
      </h2>
    );
  }
  return (
    <h1
      className="headingH1"
      style={{
        color: `${colour}`,
      }}
    >
      {children}
    </h1>
  );
};

export default Heading;
