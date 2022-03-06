import Text, { TextSize } from "../Text/Text";
import "./Button.css";

export enum ButtonType {
  primary = "btn-primary",
  secondary = "btn-secondary",
}

interface IProps {
  buttonVariant: ButtonType;
  text: string;
}

const Button = ({ buttonVariant, text }: IProps) => {
  return <button className={`btn ${buttonVariant}`}>{text}</button>;
};

export default Button;
