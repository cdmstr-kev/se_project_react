import closeButton from "../../assets/images/closeButton.svg";
import "./ModalWithForm.css";

export default function ModalWithForm({
  children,
  buttonText,
  title,
  activeModal,
  handleCloseActiveModal,
}) {
  return (
    <div
      className={`modal ${
        activeModal === "add-clothing" ? "modal__is-open" : ""
      }`}
    >
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button className="modal__close-button" type="button" onClick={handleCloseActiveModal}>
          <img src={closeButton} alt="Close" />
        </button>
        <form className="modal__form">
          {children}
          <button className="modal__submit-button" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}
