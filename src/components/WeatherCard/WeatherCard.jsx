import weatherIcon from "../../assets/sunny.png";

export default function WeatherCard({weatherData}) {
  return (
    <section className="weather-card">
      <h1 className="weather-card__temp">{weatherData.temp.F}&deg;F</h1>
      <img
        className="weather-card__image"
        src={weatherIcon}
        alt="Weather Icon"
      />
    </section>
  );
}
