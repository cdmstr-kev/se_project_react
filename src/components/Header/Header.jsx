import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/images/logo.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch.jsx";
import closeButton from "../../assets/images/closeButton.svg";
import CurrentUserContext from "../../contexts/CurrentUserContext.js";
import { useContext, useState } from "react";
import { getInitials } from "../../utils/helpers.js";

export default function Header({
  onAddClothingClick,
  weatherData,
  activeModal,
  handleCloseActiveModal,
  onMobileMenuClick,
  isLoggedIn,
  handleLogInClick,
  handleSignUpClick,
  handleLogOut,
  handleEditProfileClick,
}) {
  const handleLogoutClick = () => {
    handleLogOut();
  };

  const handleEditProfile = () => {
    handleEditProfileClick();
  };

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  const { currentUser } = useContext(CurrentUserContext);
  const initials = getInitials(currentUser.name);
  const [imageError, setImageError] = useState(false);

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
          {isLoggedIn &&
            (currentUser.avatar && !imageError ? (
              <img
                className="sidebar__avatar"
                src={currentUser.avatar}
                alt={currentUser.name || "Profile"}
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="sidebar__avatar sidebar__avatar_initials">
                {initials}
              </div>
            ))}

          <div className="header__mobile-menu-content">
            {isLoggedIn ? (
              <>
                <p className="header__mobile-menu-username">
                  {currentUser.name}
                </p>
                <p
                  onClick={handleEditProfile}
                  className="header__mobile-menu-text"
                >
                  Change Profile data
                </p>
                <p
                  onClick={handleLogoutClick}
                  className="header__mobile-menu-logout"
                >
                  Log Out
                </p>
              </>
            ) : null}
          </div>
        </div>
        <div className="header__content-right">
          <ToggleSwitch />
          {isLoggedIn ? (
            <>
              <button
                type="button"
                className="header__button"
                onClick={onAddClothingClick}
              >
                + Add Clothes
              </button>
              <Link className="header__profile-link" to="/profile">
                <p className="header__username">{currentUser.name}</p>
                {currentUser.avatar && !imageError ? (
                  <img
                    className="sidebar__avatar"
                    src={currentUser.avatar}
                    alt={currentUser.name || "Profile"}
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="sidebar__avatar sidebar__avatar_initials">
                    {initials}
                  </div>
                )}
              </Link>
            </>
          ) : (
            <>
              <button
                onClick={handleSignUpClick}
                className="header__button header__button-authorize"
              >
                {" "}
                Sign Up
              </button>
              <button
                onClick={handleLogInClick}
                className="header__button header__button-authorize"
              >
                {" "}
                Log In
              </button>
            </>
          )}
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

          {isLoggedIn ? (
            <Link className="header__profile-link" to="/profile">
              {currentUser.avatar && !imageError ? (
                <img
                  className="sidebar__avatar"
                  src={currentUser.avatar}
                  alt={currentUser.name || "Profile"}
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="sidebar__avatar sidebar__avatar_initials">
                  {initials}
                </div>
              )}
              <p className="header__mobile-menu-username">{currentUser.name}</p>
            </Link>
          ) : (
            <div className="header__profile-link">
              <p
                onClick={handleSignUpClick}
                className="header__mobile-menu-text"
              >
                Sign Up
              </p>
              <p
                onClick={handleLogInClick}
                className="header__mobile-menu-text"
              >
                Log In
              </p>
            </div>
          )}
          {isLoggedIn && (
            <button
              type="button"
              className="header__button"
              onClick={onAddClothingClick}
            >
              + Add Clothes
            </button>
          )}

          <ToggleSwitch />
        </div>
      </div>
    </header>
  );
}
