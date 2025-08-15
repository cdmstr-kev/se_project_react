import { useState } from "react";
import { useEffect } from "react";

// import "./App.css";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import { ItemModal } from "../ItemModal/ItemModal.jsx";
import {
  getWeatherForecast,
  filterWeatherData,
} from "../../utils/weatherapi.js";
import { coordinates, APIkey } from "../../utils/constants.js";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999 },
    city: "",
    condition: "",
    isDay: true,
  });

  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});

  const handleAddClothingClick = () => {
    setActiveModal("add-clothing");
  };

  const handleCloseActiveModal = () => {
    setActiveModal("");
  };

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };
  useEffect(() => {
    getWeatherForecast(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
        // debugger;
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <div className="app">
        <div className="app__content">
          <Header
            onAddClothingClick={handleAddClothingClick}
            weatherData={weatherData}
          />
          <Main weatherData={weatherData} handleCardClick={handleCardClick} />
          <Footer />
        </div>
        <ModalWithForm
          buttonText="Add garment"
          title="New garment"
          activeModal={activeModal}
          handleCloseActiveModal={handleCloseActiveModal}
        >
          <fieldset className="modal__fieldset">
            <label htmlFor="name" className="modal__label">
              Name
              <input
                id="name"
                className="modal__input"
                type="text"
                name="name"
                placeholder="Name"
                required
              />
            </label>
          </fieldset>

          <fieldset className="modal__fieldset">
            <label htmlFor="image" className="modal__label">
              Image
              <input
                id="image"
                className="modal__input"
                type="url"
                name="image"
                placeholder="Image URL"
                required
              />
            </label>
          </fieldset>

          <fieldset className="modal__fieldset">
            <legend className="modal__legend">Select the weather type:</legend>

            <label htmlFor="hot" className="modal__radio-label">
              <input
                id="hot"
                className="modal__input"
                type="radio"
                name="hot"
                required
              />
              Hot
            </label>
            <label htmlFor="warm" className="modal__radio-label">
              <input
                id="warm"
                className="modal__input"
                type="radio"
                name="warm"
                required
              />
              Warm
            </label>
            <label htmlFor="cold" className="modal__radio-label">
              <input
                id="cold"
                className="modal__input"
                type="radio"
                name="cold"
                required
              />
              Cold
            </label>
          </fieldset>
        </ModalWithForm>
        <ItemModal
          activeModal={activeModal}
          selectedCard={selectedCard}
          handleCloseActiveModal={handleCloseActiveModal}
        />
      </div>
    </>
  );
}

export default App;
