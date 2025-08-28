import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard.jsx";

const ClothesSection = ({ clothingItems, handleCardClick  }) => {
  return (
    <div className="clothes-section">
      <div className="clothes-section__title-container">
        <h2 className="clothes-section__title">Your items</h2>
        <button className="clothes-section__add-button">+ Add new</button>
      </div>
      <div className="clothes-section__container">
        <ul className="cards__list">
          {clothingItems
            .map((item) => (
              <ItemCard
                key={item._id}
                item={item}
                onCardClick={handleCardClick}
              />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default ClothesSection;
