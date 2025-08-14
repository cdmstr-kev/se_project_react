
export default function ItemCard({ item }) {
  return (
    <div className="cards__item">
      <p className="cards__item-text">{item.name}</p>
      <img className="cards__item-image" src={item.link} alt={item.name} />
    </div>
  );
}