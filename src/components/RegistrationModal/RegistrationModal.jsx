import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import useForm from "../../hooks/useForm.js";
import "./RegistrationModal.css";

const RegistrationModal = ({
  isOpen,
  handleCloseActiveModal,
  onUserSignUp,
  handleOpenLogin,
}) => {
  const defaultValues = {
    email: "",
    password: "",
    name: "",
    avatar: "",
  };

  const { values, handleChange, resetForm } = useForm(defaultValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    onUserSignUp(values)
      .then(() => {
        resetForm();
      })
      .catch((error) => {
        console.error("Failed to add item:", error);
      });
  };

  return (
    <ModalWithForm
      buttonText="Sign Up"
      title="Sign Up"
      handleCloseActiveModal={handleCloseActiveModal}
      onSubmit={handleSubmit}
      name="RegistrationModal"
      isOpen={isOpen}
    >
      <fieldset className="modal__fieldset">
        <label htmlFor="registration-email" className="modal__label">
          Email
          <input
            id="registration-email"
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
        <label htmlFor="registration-password" className="modal__label">
          Password
          <input
            id="registration-password"
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

      <fieldset className="modal__fieldset">
        <label htmlFor="registration-name" className="modal__label">
          Name
          <input
            id="registration-name"
            className="modal__input"
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            placeholder="Name"
            required
          />
        </label>
      </fieldset>

      <fieldset className="modal__fieldset">
        <label
          htmlFor="registration-avatar"
          className="modal__label modal__label_avatar"
        >
          Avatar URL
          <input
            id="registration-avatar"
            className="modal__input"
            type="url"
            name="avatar"
            value={values.avatar}
            onChange={handleChange}
            placeholder="Avatar URL"
            required
          />
        </label>
      </fieldset>
      <button
        type="button"
        className="registration-modal__switch"
        onClick={handleOpenLogin}
      >
        or Log In
      </button>
    </ModalWithForm>
  );
};
export default RegistrationModal;
