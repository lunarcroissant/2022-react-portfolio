import Text, { TextSize, TextWeight } from "../Text/Text";
import "./NavLink.css";

interface IProps {
  children: string;
  theme?: string;
  icon?: string;
  handleClick?: (value: any) => void;
}

const NavLinkNative = ({ children, theme, icon, handleClick }: IProps) => {
  function handleBackClick(ref: any) {
    if (ref && ref.current /* + other conditions */) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <a className={`navlink navlink--${theme}`} onClick={handleClick}>
      {icon ? <img src={`${process.env.PUBLIC_URL}${icon}`} /> : null}
      <Text size={TextSize.sm} weight={TextWeight.light}>
        {children}
      </Text>
    </a>
  );
};

export default NavLinkNative;
