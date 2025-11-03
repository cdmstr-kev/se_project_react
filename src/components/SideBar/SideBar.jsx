import "./SideBar.css";
import CurrentUserContext from "../../contexts/CurrentUserContext.js";
import {useContext, useState} from "react";
import { getInitials } from "../../utils/helpers.js";

const SideBar = ({ handleEditProfileClick, handleLogOut }) => {
  const { currentUser } = useContext(CurrentUserContext);
  const initials = getInitials(currentUser.name);
  const [loaded, setLoaded] = useState(false);

  const handleLogoutClick = () => {
    handleLogOut();
  }

  return (
    <div className="sidebar">
      <div className="sidebar__container">
        {currentUser.avatar && loaded ? (
            <img
                className="sidebar__avatar"
                src={currentUser.avatar}
                alt={currentUser.name || "Profile"}
                onLoad={() => setLoaded(true)}
            />
        ) : (
            <div className="sidebar__avatar sidebar__avatar_initials">
              {initials}
            </div>
        )}
        <p className="sidebar__username">{currentUser.name}</p>
      </div>
      <p onClick={ handleEditProfileClick } className="sidebar__edit-profile">Change Profile Data</p>
      <p onClick={handleLogoutClick} className="sidebar__logout">Log Out</p>
    </div>
  );
};

export default SideBar;
