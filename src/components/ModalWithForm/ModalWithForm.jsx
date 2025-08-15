import closeButton from "../../assets/closeButton.svg"

export default function ModalWithForm({ children, buttonText, title }) {
  return (
    <div className="modal">
      <form className="modal__form">
        <h2 className="modal__title">{title}</h2>
        <button className="modal__close-button" type="button">
          <img src={closeButton} alt="Close" />
        </button>
        {children}
        <button className="modal__submit-button" type="submit">
          {buttonText}
        </button>
      </form>
    </div>
  );
}
