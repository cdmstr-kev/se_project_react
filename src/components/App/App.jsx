import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

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
import RegistrationModal from "../RegistrationModal/RegistrationModal.jsx";
import LoginModal from "../LoginModal/LoginModal.jsx";
import * as auth from "../../utils/auth.js";
import * as api from "../../utils/api.js";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.jsx";
import AppContext from "../../contexts/AppContext.js";
import CurrentUserContext from "../../contexts/CurrentUserContext.js";
import EditProfileModal from "../EditProfileModal/EditProfileModal.jsx";

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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState({ name: "", email: "" });
  const navigate = useNavigate();

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };

  const handleAddClothingClick = () => {
    setActiveModal("add-clothing");
  };

  const handleSignUpClick = () => {
    setActiveModal("RegistrationModal");
  };

  const handleLogInClick = () => {
    setActiveModal("LoginModal");
  };

  const handleEditProfileClick = () => {
    setActiveModal("edit-profile-modal");
  };

  const handleDeleteItemClick = (item) => {
    setActiveModal("delete-confirmation");
    setSelectedCard(item);
  };

  const handleAddItemSubmit = (newItem) => {
    const token = localStorage.getItem("jwt");
    return addItem(newItem, token)
      .then((data) => {
        setClothingItems((prev) => [data, ...prev]);
        handleCloseActiveModal();
      })
      .catch((error) => {
        console.error("Failed to add item:", error);
      });
  };

  const handleProfileUpdate = (updatedItem) => {
    const { name, avatar } = updatedItem;

    auth
      .update({ name, avatar })
      .then((res) => {
        setCurrentUser(res);
        handleCloseActiveModal();
      })
      .catch(console.error)
      .finally(() => {
        console.log("Profile update completed");
      });
  };

  const handleNewRegistration = (newItem) => {
    const { email, password, name, avatar } = newItem;
    return auth
      .register({ email, password, name, avatar })
      .then(() => {
        return auth.signin({ email, password });
      })
      .then((res) => {
        if (res.token) {
          localStorage.setItem("jwt", res.token);
          return auth.checkToken(res.token);
        }
      })
      .then((userData) => {
        setCurrentUser(userData);
        setIsLoggedIn(true);
        handleCloseActiveModal();
        navigate("/");
      })
      .catch(console.error);
  };

  const handleLogIn = ({ email, password }) => {
    if (!email || !password) {
      return;
    }

    return auth
      .signin({ email, password })
      .then((res) => {
        if (res.token) {
          localStorage.setItem("jwt", res.token);
          return auth.checkToken(res.token);
        }
      })
      .then((userData) => {
        setCurrentUser(userData);
        setIsLoggedIn(true);
        navigate("/");
        handleCloseActiveModal();
      })
      .catch(console.error);
  };

  const handleLogOut = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setCurrentUser({ name: "", email: "" });
    navigate("/");
  };

  const handleDeleteItem = (item) => {
    const token = localStorage.getItem("jwt");
    deleteItem(item._id, token)
      .then(() => {
        setClothingItems((prev) => prev.filter((i) => i._id !== item._id));
        handleCloseActiveModal();
      })
      .catch((error) => {
        console.error("Failed to delete item:", error);
      });
  };

  const handleCardLike = ({ id, isLiked }) => {
    const token = localStorage.getItem("jwt");

    if (!token) {
      return;
    }

    !isLiked
      ? api
          .addCardLike(id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === id ? updatedCard : item))
            );
          })
          .catch((err) => console.log(err))
      : api
          .removeCardLike(id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === id ? updatedCard : item))
            );
          })
          .catch((err) => console.log(err));
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

  useEffect(() => {
    const token = localStorage.getItem("jwt");

    if (!token) {
      setIsLoading(false);
      return;
    }

    auth
      .checkToken(token)
      .then((data) => {
        setIsLoggedIn(true);
        setCurrentUser(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Failed to check token:", error);
        localStorage.removeItem("jwt");
        setIsLoading(false);
      });
  }, []);

  return (
    <AppContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        isLoading,
        setIsLoading,
        clothingItems,
      }}
    >
      <CurrentUserContext.Provider value={{ currentUser }}>
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
                isLoggedIn={isLoggedIn}
                handleSignUpClick={handleSignUpClick}
                handleLogInClick={handleLogInClick}
                handleLogOut={handleLogOut}
                handleEditProfileClick={handleEditProfileClick}
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
                      onCardLike={handleCardLike}
                      isLoggedIn={isLoggedIn}
                    />
                  }
                />
                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute>
                      <Profile
                        activeModal={activeModal}
                        clothingItems={clothingItems}
                        handleCardClick={handleCardClick}
                        onDeleteClick={handleDeleteItemClick}
                        onAddClothingClick={handleAddClothingClick}
                        handleEditProfileClick={handleEditProfileClick}
                        onCardLike={handleCardLike}
                        handleLogOut={handleLogOut}
                      />
                    </ProtectedRoute>
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
            <RegistrationModal
              handleCloseActiveModal={handleCloseActiveModal}
              onUserSignUp={handleNewRegistration}
              isOpen={activeModal === "RegistrationModal"}
              handleOpenLogin={handleLogInClick}
            />
            <LoginModal
              handleCloseActiveModal={handleCloseActiveModal}
              isOpen={activeModal === "LoginModal"}
              handleOpenRegistration={handleSignUpClick}
              onUserLogin={handleLogIn}
            />
            <ItemModal
              activeModal={activeModal}
              selectedCard={selectedCard}
              handleCloseActiveModal={handleCloseActiveModal}
              onDeleteItem={handleDeleteItemClick}
            />
            <EditProfileModal
              isOpen={activeModal === "edit-profile-modal"}
              handleCloseActiveModal={handleCloseActiveModal}
              onUserUpdate={handleProfileUpdate}
              handleEditProfileClick={handleEditProfileClick}
            />
            <ConfirmationModal
              activeModal={activeModal}
              handleCloseActiveModal={handleCloseActiveModal}
              onDeleteClick={handleDeleteItem}
              itemToDelete={selectedCard}
            />
          </div>
        </CurrentTemperatureUnitContext.Provider>
      </CurrentUserContext.Provider>
    </AppContext.Provider>
  );
}

export default App;
