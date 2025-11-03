import "./Profile.css";
import SideBar from "../SideBar/SideBar.jsx";
import ClothesSection from "../ClothesSection/ClothesSection.jsx";

const Profile = ({ clothingItems, handleCardClick, onAddClothingClick, handleEditProfileClick, onCardLike, handleLogOut }) => {
  return (
    <div className="profile">
      <section className="profile sidebar">
        <SideBar
        handleEditProfileClick={handleEditProfileClick}
        handleLogOut={handleLogOut}
        />
      </section>
      <section className="profile__clothing-items">
        <ClothesSection
          clothingItems={clothingItems}
          handleCardClick={handleCardClick}
          handleAddClick={onAddClothingClick}
          onCardLike={onCardLike}
        />
      </section>
    </div>
  );
};

export default Profile;
