// import NavLink from "../../base/NavLink/NavLink";
import { NavLink } from "react-router-dom";
import Icon from "../../base/Icon/Icon";
import Text, { TextSize, TextWeight } from "../../base/Text/Text";
import "./Header.css";

interface IProps {
  linkLabels: any[];
}

const Header = ({ linkLabels }: IProps) => {
  return (
    <header className={`row padding-4 justify-between header`}>
      <nav className="row justify-between width-100">
        <a className="header__home row">
          <img
            src={`${process.env.PUBLIC_URL}/assets/EddieTierneyLogo.svg`}
            alt=""
            className="header__homeIcon"
          />
          <div className="col">
            <Text size={TextSize.lg} theme="off-white">
              Eddie
            </Text>
            <Text size={TextSize.lg} theme="off-white">
              Tierney
            </Text>
          </div>
        </a>
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
                <Text size={TextSize.sm} weight={TextWeight.light}>
                  {link.label}
                </Text>
                {/* <Icon size="sm" icon="chevron-right--white" /> */}
              </NavLink>
            );
          })}
        </div>
      </nav>
    </header>
  );
};

export default Header;
