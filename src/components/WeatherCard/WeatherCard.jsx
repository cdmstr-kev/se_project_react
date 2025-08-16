import { weatherOptions, defaultOptions } from "../../utils/constants.js";

export default function WeatherCard({ weatherData }) {
  const filteredOptions = weatherOptions.filter((option) => {
    return (
      option.day == weatherData.isDay &&
      option.condition == weatherData.condition
    );
  });

  let weatherOption;
  if (filteredOptions.length === 0) {
    weatherOption = defaultOptions[weatherData.isDay ? "day" : "night"];
  } else {
    weatherOption = filteredOptions[0];
  }

  return (
    <section className="weather-card">
      <h1 className="weather-card__temp">{weatherData.temp.F}&deg;F</h1>
      <img
        className="weather-card__image"
        src={weatherOption.url}
        alt={weatherOption.condition}
      />
    </section>
  );
}
