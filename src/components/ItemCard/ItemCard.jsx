
export default function ItemCard({ item }) {
  return (
    <li className="card">
      <p className="card__text">{item.name}</p>
      <img className="card__image" src={item.link} alt={item.name} />
    </li>
  );
}