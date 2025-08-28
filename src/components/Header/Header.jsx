import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/images/logo.svg";
import avatar from "../../assets/images/avatar.png";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch.jsx";

export default function Header({ onAddClothingClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__content">
        <div className="header__content-left">
          <Link className="header__logo-link" to="/">
            <img className="header__logo" src={logo} alt="Logo" />
          </Link>
          <p className="header__date-location">
            {currentDate}, {weatherData.city}
          </p>
        </div>
        <div className="header__content-right">
          <ToggleSwitch />
          <button
            type="button"
            className="header__button"
            onClick={onAddClothingClick}
          >
            + Add Clothes
          </button>
          <Link className="header__profile-link" to="/profile">
            <p className="header__username">Terrence Tegegne</p>
            <img className="header__avatar" src={avatar} alt="Profile" />
          </Link>
        </div>
      </div>
    </header>
  );
}
