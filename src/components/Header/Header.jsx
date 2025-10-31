import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/images/logo.svg";
import avatar from "../../assets/images/avatar.png";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch.jsx";
import closeButton from "../../assets/images/closeButton.svg";

export default function Header({
  onAddClothingClick,
  weatherData,
  activeModal,
  handleCloseActiveModal,
  onMobileMenuClick,
  isLoggedIn,
  handleLogInClick,
  handleSignUpClick
}) {
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
          <button
            onClick={onMobileMenuClick}
            className="header__menu-icon"
            type="button"
          ></button>
        </div>
        <div className="header__mobile-menu">
          <img
            className="header__mobile-menu-avatar"
            src={avatar}
            alt="Profile"
          />
          <div className="header__mobile-menu-content">
            <p className="header__mobile-menu-username">Terrence Tegegne</p>
            <p className="header__mobile-menu-text">Change profile data</p>
            <p className="header__mobile-menu-logout">Log Out</p>
          </div>
        </div>
        <div className="header__content-right">
          <ToggleSwitch />
            { isLoggedIn ?
            <>
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
            </>
                :
                <>
                <button onClick={handleSignUpClick} className="header__button header__button-authorize"> Sign Up</button>
                <button onClick={handleLogInClick} className="header__button header__button-authorize"> Log In</button>
                </>
            }
        </div>
        <div
          className={`header__modal ${
            activeModal === "header-modal" ? "modal__is-open" : ""
          }`}
        >
          <button
            onClick={handleCloseActiveModal}
            className="header__modal_closeBtn"
          >
            <img src={closeButton} alt="Close menu" />
          </button>

          <Link className="header__profile-link" to="/profile">
            <p className="header__username">Terrence Tegegne</p>
            <img className="header__avatar" src={avatar} alt="Profile" />
          </Link>
          <button
            type="button"
            className="header__button"
            onClick={onAddClothingClick}
          >
            + Add Clothes
          </button>
          <ToggleSwitch />
        </div>
      </div>
    </header>
  );
}
