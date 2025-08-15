import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.png";

export default function Header({ onAddClothingClick }) {
  return (
    <header className="header">
      <div className="header__content">
        <div className="header__content-left">
          <img className="header__logo" src={logo} alt="Logo" />
          <p className="header__date-location">June 15, New York</p>
        </div>
        <div className="header__content-right">
          <button
            type="button"
            className="header__button"
            onClick={onAddClothingClick}
          >
            + Add Clothes
          </button>
          <p className="header__username">Terrence Tegegne</p>
          <img className="header__avatar" src={avatar} alt="Profile" />
        </div>
      </div>
    </header>
  );
}
