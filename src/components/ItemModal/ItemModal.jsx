import closeButton from "../../assets/closeButton.svg";

export function ItemModal({
  activeModal,
  selectedCard,
  handleCloseActiveModal,
}) {
  return (
    <div
      className={`modal ${activeModal === "preview" ? "modal__is-open" : ""}`}
    >
      <div className="modal__content modal__content_type_image">
        <button
          className="modal__close-button modal__close-button_type_preview"
          type="button"
          onClick={handleCloseActiveModal}
        >
          <img src={closeButton} alt="Close" />
        </button>
        <img
          className="modal__image"
          src={selectedCard.link}
          alt={selectedCard.name}
        />
        <div className="modal__footer">
          <h2 className="modal__caption">{selectedCard.name}</h2>
          <p className="modal__weather">Weather: {selectedCard.weather}</p>
        </div>
      </div>
    </div>
  );
}
