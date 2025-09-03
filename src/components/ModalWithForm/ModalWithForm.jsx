import closeButton from "../../assets/images/closeButton.svg";
import "./ModalWithForm.css";
import useModalClose from "../../hooks/useModalClose";

export default function ModalWithForm({
  children,
  buttonText,
  title,
  name,
  isOpen,
  handleCloseActiveModal,
  onSubmit,
}) {
  useModalClose(isOpen, handleCloseActiveModal);

  return (
    <div
      className={`modal ${isOpen ? "modal__is-open" : ""} modal__type_${name}`}
    >
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button
          className="modal__close-button"
          type="button"
          onClick={handleCloseActiveModal}
        >
          <img src={closeButton} alt="Close" />
        </button>
        <form className="modal__form" onSubmit={onSubmit}>
          {children}
          <button className="modal__submit-button" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}
