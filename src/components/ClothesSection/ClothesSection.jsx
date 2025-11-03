import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard.jsx";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext.js";

const ClothesSection = ({ clothingItems, handleCardClick, handleAddClick, onCardLike }) => {
  const { currentUser } = useContext(CurrentUserContext);
  const userItems = clothingItems.filter((item) => item.owner === currentUser._id);

  return (
    <div className="clothes-section">
      <div className="clothes-section__title-container">
        <h2 className="clothes-section__title">Your items</h2>
        <button onClick={handleAddClick} className="clothes-section__add-button">+ Add new</button>
      </div>
      <div className="clothes-section__container">
        <ul className="cards__list">
          {userItems
            .map((item) => (
              <ItemCard
                key={item._id}
                item={item}
                onCardClick={handleCardClick}
                onCardLike={onCardLike}
              />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default ClothesSection;
