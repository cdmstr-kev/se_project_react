import WeatherCard from "../WeatherCard/WeatherCard";

export default function Main() {
  return (
    <main className="main__container">
        <WeatherCard />
        <section className="cards">
          <p className="cards__text">Today is 75°F / you may want to wear:</p>
          {/* Add Cards */}
        </section>
    </main>
  );
}
