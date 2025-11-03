import "./ItemCard.css";
import liked from "../../assets/images/State=Liked.svg";
import notLiked from "../../assets/images/State=Default.svg";
import CurrentUserContext from "../../contexts/CurrentUserContext.js";

import { useContext } from "react";

export default function ItemCard({ item, onCardClick, onCardLike }) {
  const { currentUser } = useContext(CurrentUserContext);

  const userLiked = item.likes.includes(currentUser._id);

  const handleClick = () => {
    onCardClick(item);
  };

  const handleLike = () => {
    onCardLike({ id: item._id, isLiked: userLiked });
  };

  return (
    <li className="card">
      <div className={"card__title-container"}>
        <p className="card__text">{item.name}</p>
        <img
          onClick={handleLike}
          className="card__like-btn"
          src={userLiked === true ? liked : notLiked}
          alt="heartIcon"
        />
      </div>
      <img
        onClick={handleClick}
        className="card__image"
        src={item.imageUrl}
        alt={item.name}
      />
    </li>
  );
}
