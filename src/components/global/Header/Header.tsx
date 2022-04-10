// import NavLink from "../../base/NavLink/NavLink";
import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import GlobalContext from "../../../contexts/GlobalContext/GlobalContext";
import PageContext from "../../../contexts/PageContext/PageContext";
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
  const { setContactFormVisible, setMobileMenuVisible } =
    useContext(GlobalContext);

  const { setShowCTACursor } = useContext(PageContext);
  const [scrolling, setScrolling] = useState(false);
  const [scrolledDistance, setScrolledDistance] = useState(0);
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

  // const mainDocument = document.body;

  if (document !== null) {
    document.addEventListener("scroll", (e: any) => {
      const distanceFromTop =
        document.body.scrollTop || document.documentElement.scrollTop;

      if (distanceFromTop > 0) {
        setScrolling(true);
        setScrolledDistance(distanceFromTop);
        return true;
      }

      setScrolling(false);
      return false;
    });
  }

  const measureScrolledDistance = (event: React.UIEvent<HTMLDivElement>) => {
    // let scrollDistance = document.querySelector("caseStudy")?.scrollTop;
    const eventTarget = event.target as HTMLDivElement;
    let scrollDistance = eventTarget.scrollTop;

    let windowWidth = window.screenX;
    let barWidth =
      windowWidth / 4 < scrollDistance
        ? scrollDistance / (windowWidth * 0.25) / windowWidth
        : 100;

    setScrolledDistance(barWidth);

    if (scrollDistance! > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {}, [scrolling]);

  window.addEventListener("scrolling", (event: any) => {
    const eventTarget = event.target as HTMLDivElement;
    let scrollDistance = eventTarget.scrollTop;

    let scrollTop = event.srcElement.body.scrollTop,
      topDistance = Math.min(0, scrollTop / 3 - 60);

    var aimX = event.scrollTop;
    // var aimY = event.pageY;

    if (topDistance! > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  });

  return (
    <header
      className={`row ${
        scrolling ? "scrollingGlobalHeader" : "nonScrollingGlobalHeader"
      } justify-between header`}
      // onMouseEnter={() => setShowCTACursor(false)}
      onMouseLeave={() => setShowCTACursor(true)}
      onScroll={measureScrolledDistance}
    >
      <nav className="row padding-4 align-center justify-between width-100 header__content">
        <NavLink
          to={`/`}
          className={"row header__logo"}
          key={"HomeLogoLink"}
          onMouseEnter={() => setShowCTACursor(false)}
          onMouseLeave={() => setShowCTACursor(true)}
          onClick={() => setMobileMenuVisible(false)}
        >
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

        {isMobile ? null : ( // </div> //   </div> //     </NavLinkNative> //       Contact //     <NavLinkNative handleClick={() => setContactFormVisible(true)}> //     })} //       ); //         </NavLink> //           {/* <Icon size="sm" icon="chevron-right--white" /> */} //           </Text> //             {link.label} //           > //             colour={TextColour.white} //             weight={TextWeight.light} //             size={TextSize.sm} //           <Text //         > //           key={link.label} //           } //               : "navlink between-xs row" //               ? "navlink row between-xs link--active" //             isActive //           className={({ isActive }) => //           to={`${link.urlPath}`} //         <NavLink //       return ( //     {linkLabels.map((link) => { //   <div className="header__mobileMenu"> // <div className="row header__navigation--mobile">
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
                  onMouseEnter={() => setShowCTACursor(false)}
                  onMouseLeave={() => setShowCTACursor(true)}
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
            {/* <NavLinkNative
              download={`${process.env.PUBLIC_URL}/assets/EddieTierneyLogo.svg`}
            >
              Download CV
            </NavLinkNative> */}
            <NavLinkNative
              handleClick={() => setContactFormVisible(true)}
              handleMouseEnter={() => setShowCTACursor(false)}
              handleMouseLeave={() => setShowCTACursor(true)}
            >
              Contact
            </NavLinkNative>
          </div>
        )}
      </nav>
      <div
        className={`header__scrollingDivider ${
          scrolling ? "isScrolling" : null
        }`}
        // style={{
        //   width: `${scrolling ? `${scrolledDistance}%` : "0%"}`,
        // }}
      ></div>
    </header>
  );
};

export default Header;
