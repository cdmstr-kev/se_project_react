import closeButton from "../../assets/closeButton.svg"

export default function ModalWithForm({ children, buttonText, title, activeModal,handleCloseActiveModal }) {
  return (
    <div className={`modal ${activeModal === "add-clothing" ? "modal__is-open" : ""}`}>
      <form className="modal__form">
        <h2 className="modal__title">{title}</h2>
        <button className="modal__close-button" type="button">
          <img src={closeButton} alt="Close" onClick={ handleCloseActiveModal }/>
        </button>
        {children}
        <button className="modal__submit-button" type="submit">
          {buttonText}
        </button>
      </form>
    </div>
  );
}
