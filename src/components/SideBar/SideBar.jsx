import "./SideBar.css";
import avatar from "../../assets/images/avatar.png";
import AppContext  from "../../contexts/AppContext.js";
import {useContext} from "react";

const SideBar = () => {
  const { userData } = useContext(AppContext);

  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <img className="sidebar__avatar" src={avatar} alt="Profile" />
        <p className="sidebar__username">{userData.name}</p>
      </div>
    </div>
  );
};

export default SideBar;
