import { useContext } from "react";
import { NavLink } from "react-router-dom";
import GlobalContext from "../../../contexts/GlobalContext/GlobalContext";
import Icon from "../../base/Icon/Icon";
import NavLinkNative from "../../base/NavLinkNative/NavLinkNative";
import Text, { TextColour, TextSize, TextWeight } from "../../base/Text/Text";
import VerticalSpacing from "../../base/VerticalSpacing/VerticalSpacing";

import "./MobileMenu.css";

interface IProps {
  links: any[];
}

const MobileMenu = ({ links }: IProps) => {
  const globalLinks = [
    { label: "Work", urlPath: "/" },
    { label: "Profile", urlPath: "/profile" },
  ];

  const socialLinks = [
    { label: "Dribble", urlPath: "google.com" },
    { label: "GitHub", urlPath: "google.com" },
    { label: "LinkedIn", urlPath: "google.com" },
  ];

  const activeLink = globalLinks.filter(
    (link) => link.urlPath === window.location.pathname
  )[0];
  const inactiveLinks = globalLinks.filter(
    (link) => link.urlPath !== window.location.pathname
  );

  const { mobileMenuVisible, setMobileMenuVisible, setContactFormVisible } =
    useContext(GlobalContext);
  return (
    <nav className={`mobileMenu ${mobileMenuVisible ? "active" : null}`}>
      <div className="col align-center justify-center mobileMenu__container">
        <button
          className={`row align-center justify-center mobileMenu__backButton ${
            mobileMenuVisible && "fadeIn"
          }`}
          onClick={() => setMobileMenuVisible(false)}
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              marginRight: "0.5rem",
            }}
          >
            <path
              d="M14.7254 8.14457C14.5496 8.32038 14.3111 8.41915 14.0625 8.41915L3.20062 8.41915L7.22625 12.4429C7.40229 12.6189 7.50118 12.8577 7.50118 13.1067C7.50118 13.3556 7.40229 13.5944 7.22625 13.7704C7.05021 13.9464 6.81145 14.0453 6.5625 14.0453C6.31354 14.0453 6.07479 13.9464 5.89875 13.7704L0.273748 8.1454C0.186442 8.05832 0.117176 7.95486 0.0699136 7.84096C0.0226514 7.72707 -0.00167685 7.60497 -0.00167685 7.48165C-0.00167684 7.35834 0.0226514 7.23624 0.0699136 7.12234C0.117176 7.00844 0.186442 6.90499 0.273748 6.8179L5.89875 1.1929C6.07479 1.01687 6.31355 0.917968 6.5625 0.917968C6.81145 0.917968 7.05021 1.01687 7.22625 1.1929C7.40229 1.36894 7.50118 1.6077 7.50118 1.85665C7.50118 2.10561 7.40229 2.34437 7.22625 2.5204L3.20062 6.54415L14.0625 6.54415C14.3111 6.54415 14.5496 6.64293 14.7254 6.81874C14.9012 6.99456 15 7.23301 15 7.48165C15 7.73029 14.9012 7.96875 14.7254 8.14457Z"
              fill="white"
            />
          </svg>

          <Text
            size={TextSize.lg}
            weight={TextWeight.regular}
            colour={TextColour.white}
            bold
          >
            {activeLink.label}
          </Text>
        </button>

        <div
          className={`col mobileMenu__links width-100 ${
            mobileMenuVisible && "slideUp"
          }`}
        >
          <div
            className="row width-100 align-center justify-center"
            onDrag={() => setMobileMenuVisible(false)}
          >
            <svg
              width="83"
              height="3"
              viewBox="0 0 83 3"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              opacity={0.2}
            >
              <rect width="83" height="3" rx="1.5" fill="white" />
            </svg>
          </div>
          <VerticalSpacing size="lg" />
          <div className="col justify-between">
            {inactiveLinks.map((link) => {
              return (
                <NavLink
                  to={`${link.urlPath}`}
                  className={({ isActive }) =>
                    isActive
                      ? "mobileMenu__navlinkPrimary row between-xs link--active"
                      : "mobileMenu__navlinkPrimary justify-between row"
                  }
                  key={link.label}
                >
                  <Text
                    size={TextSize.xxl}
                    weight={TextWeight.regular}
                    colour={TextColour.white}
                  >
                    {link.label}
                  </Text>
                  <Icon size="md" icon="icons_chevron-right--white" />
                </NavLink>
              );
            })}
            <NavLinkNative
              handleClick={() => setContactFormVisible(true)}
              key={"MobileContactLink"}
            >
              <Text
                size={TextSize.xxl}
                weight={TextWeight.regular}
                colour={TextColour.white}
              >
                Contact
              </Text>
              <Icon
                size="md"
                icon="icons_chevron-right--white"
                // padding="0rem"
              />
            </NavLinkNative>
          </div>

          <VerticalSpacing size="lg" />
          {socialLinks.map((link) => {
            return (
              <>
                <a
                  href={`${link.urlPath}`}
                  className={
                    "mobileMenu__navlinkSecondary row between-xs link--active"
                  }
                  key={link.label}
                >
                  <Text
                    size={TextSize.sm}
                    weight={TextWeight.regular}
                    colour={TextColour.white}
                    opacity="0.8"
                  >
                    {link.label}
                  </Text>
                </a>
                <VerticalSpacing size="xs" />
              </>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default MobileMenu;
