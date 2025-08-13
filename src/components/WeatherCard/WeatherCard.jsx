import weatherIcon from "../../assets/sunny.png";


export default function WeatherCard() {
  return (
      <section className="weather-card">
        <h1 className="weather-card__temp">75&deg;F</h1>
        <img className="weather-card__image" src={weatherIcon} alt="Weather Icon" />
      </section>
  );
}
