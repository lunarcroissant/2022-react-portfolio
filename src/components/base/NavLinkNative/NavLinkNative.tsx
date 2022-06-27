import { ReactNode } from "react";
import useViewportSize from "../../../hooks/useViewportSize/useViewportSize";
import Text, { TextColour, TextSize, TextWeight } from "../Text/Text";
import "./NavLink.css";

interface IProps {
  children: any | ReactNode;
  theme?: string;
  icon?: string;
  handleClick?: (value: any) => void;
  handleMouseEnter?: (value: any) => void;
  handleMouseLeave?: (value: any) => void;
  download?: string;
}

const NavLinkNative = ({
  children,
  theme,
  icon,
  handleClick,
  handleMouseEnter,
  handleMouseLeave,
  download,
}: IProps) => {
  const isMobile = useViewportSize(1024);
  function handleBackClick(ref: any) {
    if (ref && ref.current /* + other conditions */) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <a
      className={`navlink navlink--${theme} navlink__mobileMenuLink`}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      href={download ? download : undefined}
    >
      {icon ? <img src={`${process.env.PUBLIC_URL}${icon}`} /> : null}
      {isMobile ? (
        <div className="row justify-between width-100">{children}</div>
      ) : (
        <Text
          colour={TextColour.white}
          size={TextSize.sm}
          weight={TextWeight.light}
        >
          {children}
        </Text>
      )}
    </a>
  );
};

export default NavLinkNative;
