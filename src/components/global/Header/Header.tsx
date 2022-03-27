// import NavLink from "../../base/NavLink/NavLink";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import GlobalContext from "../../../contexts/GlobalContext/GlobalContext";
import useViewportSize from "../../../hooks/useViewportSize/useViewportSize";
import { Icons } from "../../base/button/Button";
import Icon from "../../base/Icon/Icon";
import NavLinkNative from "../../base/NavLinkNative/NavLinkNative";
import Text, { TextColour, TextSize, TextWeight } from "../../base/Text/Text";
import "./Header.css";

interface IProps {
  linkLabels: any[];
}

const Header = ({ linkLabels }: IProps) => {
  const { setContactFormVisible } = useContext(GlobalContext);
  // if (true) {
  //   return (

  //   )
  // }

  const isMobile = useViewportSize(768);

  // if (isMobile) {
  //   return (
  //     <nav>
  //       <Icon isButton size="md" icon="icons_hamburgerMenu--darkPrimary" />
  //     </nav>
  //   );
  // }
  return (
    <header className={`row padding-4 justify-between header`}>
      <nav className="row align-center justify-between width-100">
        <NavLink to={`/`} className={"row header__logo"} key={"HomeLogoLink"}>
          {/* <a className="header__home row"> */}
          <img
            src={`${process.env.PUBLIC_URL}/assets/EddieTierneyLogo.svg`}
            alt=""
            className="header__homeIcon"
          />
          <div className="col">
            <Text size={TextSize.lg} colour={TextColour.white}>
              Eddie
            </Text>
            <Text size={TextSize.lg} colour={TextColour.white}>
              Tierney
            </Text>
          </div>
          {/* </a> */}
        </NavLink>

        {isMobile ? // <div className="row header__navigation--mobile">
        //   <div className="header__mobileMenu">
        //     {linkLabels.map((link) => {
        //       return (
        //         <NavLink
        //           to={`${link.urlPath}`}
        //           className={({ isActive }) =>
        //             isActive
        //               ? "navlink row between-xs link--active"
        //               : "navlink between-xs row"
        //           }
        //           key={link.label}
        //         >
        //           <Text
        //             size={TextSize.sm}
        //             weight={TextWeight.light}
        //             colour={TextColour.white}
        //           >
        //             {link.label}
        //           </Text>
        //           {/* <Icon size="sm" icon="chevron-right--white" /> */}
        //         </NavLink>
        //       );
        //     })}
        //     <NavLinkNative handleClick={() => setContactFormVisible(true)}>
        //       Contact
        //     </NavLinkNative>
        //   </div>
        // </div>
        null : (
          <div className="row header__navigation">
            {linkLabels.map((link) => {
              return (
                <NavLink
                  to={`${link.urlPath}`}
                  className={({ isActive }) =>
                    isActive
                      ? "navlink row between-xs link--active"
                      : "navlink between-xs row"
                  }
                  key={link.label}
                >
                  <Text
                    size={TextSize.sm}
                    weight={TextWeight.light}
                    colour={TextColour.white}
                  >
                    {link.label}
                  </Text>
                  {/* <Icon size="sm" icon="chevron-right--white" /> */}
                </NavLink>
              );
            })}
            <NavLinkNative handleClick={() => setContactFormVisible(true)}>
              Contact
            </NavLinkNative>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
