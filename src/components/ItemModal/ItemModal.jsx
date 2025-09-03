import closeButton from "../../assets/images/closeButtonTypePreview.svg";
import "../ModalWithForm/ModalWithForm.css";
import "./ItemModal.css";
import useModalClose from "../../hooks/useModalClose";

export function ItemModal({
  activeModal,
  selectedCard,
  handleCloseActiveModal,
  onDeleteItem,
}) {
  const isOpen = activeModal === "preview";

  useModalClose(isOpen, handleCloseActiveModal);
  return (
    <div className={`modal ${isOpen ? "modal__is-open" : ""}`}>
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
          src={selectedCard.imageUrl}
          alt={selectedCard.name}
        />
        <div className="modal__footer">
          <div className="modal__info">
            <h2 className="modal__caption">{selectedCard.name}</h2>
            <p className="modal__weather">Weather: {selectedCard.weather}</p>
          </div>
          <div>
            <button
              onClick={() => onDeleteItem(selectedCard)}
              className="modal__delete-button"
              type="button"
            >
              Delete item
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
