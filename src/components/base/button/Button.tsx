import { Children } from "react";
import Icon from "../Icon/Icon";
import Text, { TextSize } from "../Text/Text";
import "./Button.css";

export enum ButtonType {
  primary = "btn-primary",
  primaryWhite = "btn-primary--light",
  secondary = "btn-secondary",
  secondaryBlue = "btn-blue",
}

export enum Icons {
  close = "icons_close",
  closeLight = "icons_close--white",
  mailLight = "icons_mail--white",
  arrow = "icons_arrow",
  reactLight = "icons_react--white",
  gitHubLight = "icons_github--white",
  dribbleLight = "icons_dribble--white",
  linkedInLight = "icons_linkedin--white",
}

interface IProps {
  buttonVariant: ButtonType;
  children: string;
  icon?: Icons;
  handleClick?: (value: any) => void;
}

const Button = ({ buttonVariant, icon, children, handleClick }: IProps) => {
  return (
    <button className={`btn ${buttonVariant}`} onClick={handleClick}>
      {icon ? <Icon size="md" icon={icon} /> : null}
      {children}
    </button>
  );
};

export default Button;
