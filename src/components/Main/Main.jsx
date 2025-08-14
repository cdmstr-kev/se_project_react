import WeatherCard from "../WeatherCard/WeatherCard";
import { defaultClothingItems } from "../../utils/constants";
import ItemCard from "../ItemCard/ItemCard";

export default function Main({ weatherData }) {
  return (
    <main className="main__container">
        <WeatherCard />
        <section className="cards">
          <p className="cards__text">Today is 75°F / you may want to wear:</p>
          {defaultClothingItems
        //   .filter((item) => {
        //     return item.weather === weatherData.type
        //   })
          .map((item) => (
            <ItemCard key={item._id} item={item} />
          ))}
        </section>
    </main>
  );
}
