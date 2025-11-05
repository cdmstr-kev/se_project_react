import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import useForm from "../../hooks/useForm.js";
import "./LoginModal.css";
import AppContext from "../../contexts/AppContext.js";
import { useContext } from "react";

const LoginModal = ({
  isOpen,
  handleCloseActiveModal,
  onUserLogin,
  handleOpenRegistration,
}) => {
  const defaultValues = {
    email: "",
    password: "",
  };

  const { isLoading, setIsLoading } = useContext(AppContext);
  const { values, handleChange, resetForm } = useForm(defaultValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    onUserLogin(values)
      .then(() => {
        resetForm();
      })
      .catch((error) => {
        console.error("Failed to log in:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <ModalWithForm
      buttonText={isLoading ? "Logging In..." : "Log In"}
      title="Log In"
      handleCloseActiveModal={handleCloseActiveModal}
      onSubmit={handleSubmit}
      name="LoginModal"
      isOpen={isOpen}
    >
      <fieldset className="modal__fieldset">
        <label htmlFor="login-email" className="modal__label">
          Email
          <input
            id="login-email"
            className="modal__input"
            type="email"
            name="email"
            placeholder="Email"
            required
            value={values.email}
            onChange={handleChange}
          />
        </label>
      </fieldset>

      <fieldset className="modal__fieldset">
        <label htmlFor="login-password" className="modal__label">
          Password
          <input
            id="login-password"
            className="modal__input"
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />
        </label>
      </fieldset>

      {!isLoading && (
        <button
          type="button"
          className="login-modal__switch"
          onClick={handleOpenRegistration}
        >
          or Sign Up
        </button>
      )}
    </ModalWithForm>
  );
};
export default LoginModal;
