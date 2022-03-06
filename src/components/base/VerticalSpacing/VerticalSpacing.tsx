import "./VerticalSpacing.css";

interface IProps {
  size: string;
}

const VerticalSpacing = ({ size }: IProps) => {
  return <div className={`verticalSpacing--${size}`}></div>;
};

export default VerticalSpacing;
