import React from "react";
import "./ToggleSwitch.css";

const Switch = () => {
  return (
    <>
      <label
        className="toggle-switch"
      >
        <input
          className="toggle-switch__checkbox"
          id={`react-switch-new`}
          type="checkbox"
        />
        <span className={`toggle-switch__circle`} />
        <span className={`toggle-switch__text toggle-switch__text_f`} >F</span>
        <span className={`toggle-switch__text toggle-switch__text_c`} >C</span>
      </label>
    </>
  );
};

export default Switch;
