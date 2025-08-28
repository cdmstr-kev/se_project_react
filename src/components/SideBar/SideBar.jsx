import "./SideBar.css";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <img
          className="sidebar__avatar"
          src="/src/assets/images/avatar.png"
          alt="Profile"
        ></img>
        <p className="sidebar__username">Terrence Tegegne</p>
      </div>
    </div>
  );
};

export default SideBar;
