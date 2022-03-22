import "./Heading.css";

interface IProps {
  children: string;
  colour: TextColour;
  headingLevel: string;
}

export enum TextColour {
  white = "#fff",
  greyBlue = "var(--grey-blue)",
  primaryBlue = "var(--primary-blue)",
  primaryGreen = "var(--primary-green)",
  offWhite = "var(--off-white)",
  lightGrey = "var(--light-grey)",
}

const Heading = ({ children, colour, headingLevel }: IProps) => {
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
