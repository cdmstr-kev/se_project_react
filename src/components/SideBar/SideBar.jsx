import "./SideBar.css";
import CurrentUserContext from "../../contexts/CurrentUserContext.js";
import {useContext} from "react";
import { getInitials } from "../../utils/helpers.js";

const SideBar = () => {
  const { currentUser } = useContext(CurrentUserContext);
  const initials = getInitials(currentUser.name);

  return (
    <div className="sidebar">
      <div className="sidebar__container">
        {currentUser.avatar ? (
            <img
                className="sidebar__avatar"
                src={currentUser.avatar}
                alt={currentUser.name || "Profile"}
            />
        ) : (
            <div className="sidebar__avatar sidebar__avatar_initials">
              {initials}
            </div>
        )}
        <p className="sidebar__username">{currentUser.name}</p>
      </div>
    </div>
  );
};

export default SideBar;
