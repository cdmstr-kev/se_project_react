import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import { useContext, useEffect, useRef } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext.js";
import useForm from "../../hooks/useForm.js";

export const EditProfileModal = ({
  isOpen,
  handleCloseActiveModal,
  onUserUpdate,
}) => {
  const { currentUser } = useContext(CurrentUserContext);
  const isInitialized = useRef(false);

  const defaultValues = {
    name: "",
    avatar: "",
  };

  const { values, handleChange, setValues } = useForm(defaultValues);

  useEffect(() => {
    if (!isOpen) return;

    if (!isInitialized.current) {
      setValues(currentUser);
      isInitialized.current = true;
    }
  }, [isOpen, setValues, currentUser]);

  const handleSubmit = (e) => {
    e.preventDefault();

    onUserUpdate(values);
  };

  return (
    <ModalWithForm
      buttonText="Save"
      title="Edit Profile"
      handleCloseActiveModal={handleCloseActiveModal}
      onSubmit={handleSubmit}
      name="edit-profile-modal"
      isOpen={isOpen}
    >
      <fieldset className="modal__fieldset">
        <label htmlFor="edt-prfl-name" className="modal__label">
          Name
          <input
            id="edt-prfl-name"
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
          htmlFor="edt-prfl-avatar"
          className="modal__label modal__label_avatar"
        >
          Avatar URL
          <input
            id="edt-prfl-avatar"
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
    </ModalWithForm>
  );
};

export default EditProfileModal;
