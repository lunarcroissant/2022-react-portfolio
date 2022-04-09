import Icon from "../Icon/Icon";
import "./Link.css";

export enum LinkType {
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
  linkVariant: LinkType;
  children: string;
  icon?: Icons;
  handleClick?: (value: any) => void;
  href?: string;
}

const Link = ({ linkVariant, icon, children, handleClick, href }: IProps) => {
  return (
    <a className={`btn ${linkVariant}`} onClick={handleClick} href={href}>
      {icon ? <Icon size="md" icon={icon} /> : null}
      {children}
    </a>
  );
};

export default Link;
