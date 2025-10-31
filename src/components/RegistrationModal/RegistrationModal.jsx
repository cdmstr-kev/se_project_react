
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import useForm from "../../hooks/useForm.js";
import "./RegistrationModal.css";
import {Link} from "react-router-dom";

const RegistrationModal = ({isOpen, handleCloseActiveModal, onUserSignUp}) => {
  // TODO Work on email validation
  const defaultValues = {
    email: "",
    password: "",
    name: "",
    avatarurl: "",
  };

  const {values, handleChange, resetForm} = useForm(defaultValues);

  const handleSubmit = (e) => {
    e.preventDefault();
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
            <label htmlFor="name" className="modal__label">
              Email
              <input
                  id="email"
                  className="modal__input"
                  type="text"
                  name="email"
                  placeholder="Email"
                  required
                  value={values.email}
                  onChange={handleChange}
              />
            </label>
          </fieldset>

          <fieldset className="modal__fieldset">
            <label htmlFor="link" className="modal__label">
              Password
              <input
                  id="password"
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
            <label htmlFor="link" className="modal__label">
              Name
              <input
                  id="name"
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
            <label htmlFor="link" className="modal__label modal__label_avatar">
              Avatar URL
              <input
                  id="avatarurl"
                  className="modal__input"
                  type="url"
                  name="avatarurl"
                  value={values.AvatarUrl}
                  onChange={handleChange}
                  placeholder="Avatar URL"
                  required
              />
            </label>
          </fieldset>
          <Link className="test-class" to={"/"}>or Log in</Link>
        </ModalWithForm>
    )
}
export default RegistrationModal
