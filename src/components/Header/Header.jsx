import "./Header.css";
import logo from "../../assets/images/logo.svg";
import avatar from "../../assets/images/avatar.png";

export default function Header({ onAddClothingClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__content">
        <div className="header__content-left">
          <img className="header__logo" src={logo} alt="Logo" />
          <p className="header__date-location">
            {currentDate}, {weatherData.city}
          </p>
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
