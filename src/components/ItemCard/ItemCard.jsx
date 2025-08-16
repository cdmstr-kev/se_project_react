import "./ItemCard.css";

export default function ItemCard({ item, onCardClick }) {
  const handleClick = () => {
    onCardClick(item);
  };

  return (
    <li className="card">
      <p className="card__text">{item.name}</p>
      <img
        onClick={handleClick}
        className="card__image"
        src={item.link}
        alt={item.name}
      />
    </li>
  );
}
