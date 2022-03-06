import "./HorizontalDivider.css";

interface IProps {
  theme?: string;
}

const HorizontalDivider = ({ theme }: IProps) => {
  return (
    <div className="row horizontalDividerContainer">
      <div
        className={theme ? `horizontalDivider--${theme}` : "horizontalDivider"}
      ></div>
    </div>
  );
};

export default HorizontalDivider;
