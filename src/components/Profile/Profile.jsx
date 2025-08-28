import "./Profile.css";
import SideBar from "../SideBar/SideBar.jsx";
import ClothesSection from "../ClothesSection/ClothesSection.jsx";

const Profile = ({ clothingItems, handleCardClick }) => {
  return (
    <>
      <div className="profile">
        <section className="profile sidebar">
          <SideBar />
        </section>
        <section className="profile__clothing-items">
          <ClothesSection
            clothingItems={clothingItems}
            handleCardClick={handleCardClick}
          />
        </section>
      </div>
    </>
  );
};

export default Profile;
