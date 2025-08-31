import { useContext } from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext.js";
import "./ToggleSwitch.css";

const ToggleSwitch = () => {
  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(
    CurrentTemperatureUnitContext
  );

  return (
    <>
      <label className="toggle-switch">
        <input
          className="toggle-switch__checkbox"
          id={`react-switch-new`}
          type="checkbox"
          onChange={handleToggleSwitchChange}
        />
        <span className={`toggle-switch__circle`} />
        <span
          className={`toggle-switch__text toggle-switch__text_f ${
            currentTemperatureUnit === "F"
              ? "toggle-switch__text_color_white"
              : ""
          }`}
        >
          F
        </span>
        <span
          className={`toggle-switch__text toggle-switch__text_c ${
            currentTemperatureUnit === "C"
              ? "toggle-switch__text_color_white"
              : ""
          }`}
        >
          C
        </span>
      </label>
    </>
  );
};

export default ToggleSwitch;
