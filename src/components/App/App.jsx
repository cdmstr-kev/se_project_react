import { useState } from "react";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import Profile from "../Profile/Profile.jsx";
import AddItemModal from "../AddItemModal/AddItemModal.jsx";
import { ItemModal } from "../ItemModal/ItemModal.jsx";
import {
  getWeatherForecast,
  filterWeatherData,
} from "../../utils/weatherapi.js";
import { coordinates, apiKey } from "../../utils/constants.js";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext.js";
import { getItems, addItem, deleteItem } from "../../utils/api.js";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal.jsx";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999, C: 999 },
    city: "",
    condition: "",
    isDay: true,
  });

  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [clothingItems, setClothingItems] = useState([]);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  const handleToggleSwitchChange = (e) => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };

  const handleAddClothingClick = () => {
    setActiveModal("add-clothing");
  };

  const handleDeleteItemClick = (item) => {
    setActiveModal("delete-confirmation");
    setSelectedCard(item);
  };

  const handleAddItemSubmit = (newItem) => {
    return addItem(newItem)
      .then((data) => {
        setClothingItems((prev) => [data, ...prev]);
        setActiveModal("");
      })
      .catch((error) => {
        console.error("Failed to add item:", error);
      });
  };

  const handleDeleteItem = (item) => {
    deleteItem(item._id).then(() => {
      setClothingItems((prev) => prev.filter((i) => i._id !== item._id));
      setActiveModal("");
    });
  };

  const handleMobileMenuClick = () => {
    setActiveModal("header-modal");
  };

  const handleCloseActiveModal = () => {
    setActiveModal("");
  };

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  useEffect(() => {
    getWeatherForecast(coordinates, apiKey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    getItems()
      .then((data) => {
        setClothingItems(data);
      })
      .catch((error) => {
        console.error("Failed to fetch clothing items:", error);
      });
  }, []);

  return (
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
    >
      <div className="app">
        <div className="app__content">
          <Header
            onAddClothingClick={handleAddClothingClick}
            weatherData={weatherData}
            activeModal={activeModal}
            handleCloseActiveModal={handleCloseActiveModal}
            onMobileMenuClick={handleMobileMenuClick}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  clothingItems={clothingItems}
                  setClothingItems={setClothingItems}
                  weatherData={weatherData}
                  handleCardClick={handleCardClick}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  activeModal={activeModal}
                  clothingItems={clothingItems}
                  handleCardClick={handleCardClick}
                  onDeleteClick={handleDeleteItemClick}
                  onAddClothingClick={handleAddClothingClick}
                />
              }
            />
          </Routes>
          <Footer />
        </div>
        <AddItemModal
          handleCloseActiveModal={handleCloseActiveModal}
          onAddItem={handleAddItemSubmit}
          isOpen={activeModal === "add-clothing"}
        />
        <ItemModal
          activeModal={activeModal}
          selectedCard={selectedCard}
          handleCloseActiveModal={handleCloseActiveModal}
          onDeleteItem={handleDeleteItemClick}
        />
        <ConfirmationModal
          activeModal={activeModal}
          handleCloseActiveModal={handleCloseActiveModal}
          onDeleteClick={handleDeleteItem}
          itemToDelete={selectedCard}
        />
      </div>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;
