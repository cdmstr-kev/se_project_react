import "./SideBar.css";
import avatar from "../../assets/images/avatar.png";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <img className="sidebar__avatar" src={avatar} alt="Profile" />
        <p className="sidebar__username">Terrence Tegegne</p>
      </div>
    </div>
  );
};

export default SideBar;
