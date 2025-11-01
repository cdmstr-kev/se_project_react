
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import useForm from "../../hooks/useForm.js";
import "./LoginModal.css";
import {Link} from "react-router-dom";

const LoginModal = ({isOpen, handleCloseActiveModal, onUserLogin, handleOpenRegistration}) => {
  // TODO Work on email validation
  const defaultValues = {
    email: "",
    password: "",
  };

  const {values, handleChange, resetForm} = useForm(defaultValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUserLogin(values)
        .then(() => {
          resetForm();
        })
        .catch((error) => {
          console.error("Failed to add item:", error);
        });
  };

  return (
      <ModalWithForm
          buttonText="Log In"
          title="Log In"
          handleCloseActiveModal={handleCloseActiveModal}
          onSubmit={handleSubmit}
          name="LoginModal"
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
        {/*// TODO rename the class from test-class to something more descriptive*/}
        <span className="test-class" onClick={handleOpenRegistration}>
          or Sign Up
        </span>
      </ModalWithForm>
  )
}
export default LoginModal
