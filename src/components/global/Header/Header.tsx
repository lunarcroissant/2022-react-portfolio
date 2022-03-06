import NavLink from "../../base/NavLink/NavLink";
import Text, { TextSize } from "../../base/Text/Text";
import "./Header.css";

interface IProps {
  linkLabels: string[];
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
            <Text text="Eddie" textSize={TextSize.lg} theme="off-white" />
            <Text text="Tierney" textSize={TextSize.lg} theme="off-white" />
          </div>
        </a>
        <div className="row header__navigation">
          {linkLabels.map((label) => {
            return <NavLink label={label} />;
          })}
        </div>
      </nav>
    </header>
  );
};

export default Header;
