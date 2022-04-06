import Text, { TextColour, TextSize, TextWeight } from "../Text/Text";
import "./NavLink.css";

interface IProps {
  children: string;
  theme?: string;
  icon?: string;
  handleClick?: (value: any) => void;
  download?: string;
}

const NavLinkNative = ({
  children,
  theme,
  icon,
  handleClick,
  download,
}: IProps) => {
  function handleBackClick(ref: any) {
    if (ref && ref.current /* + other conditions */) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <a
      className={`navlink navlink--${theme}`}
      onClick={handleClick}
      {...(download ? download : null)}
      href={download ? download : undefined}
    >
      {icon ? <img src={`${process.env.PUBLIC_URL}${icon}`} /> : null}
      <Text
        colour={TextColour.white}
        size={TextSize.sm}
        weight={TextWeight.light}
      >
        {children}
      </Text>
    </a>
  );
};

export default NavLinkNative;
