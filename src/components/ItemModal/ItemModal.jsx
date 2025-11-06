import { useContext } from "react";
import closeButton from "../../assets/images/closeButtonTypePreview.svg";
import { Modal } from "../Modal/Modal.jsx";
import "./ItemModal.css";
import CurrentUserContext from "../../contexts/CurrentUserContext.js";

export function ItemModal({
  activeModal,
  selectedCard,
  handleCloseActiveModal,
  onDeleteItem,
}) {
  const { currentUser } = useContext(CurrentUserContext);
  const isOpen = activeModal === "preview";
  const isOwn = selectedCard.owner === currentUser._id;

  return (
    <Modal
      name="preview"
      onClose={handleCloseActiveModal}
      isOpen={isOpen}
      closeButtonImage={closeButton}
      containerClassName="modal__container_type_image"
      closeButtonClassName="modal__close-button_type_preview"
    >
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
          {isOwn && (
            <button
              onClick={() => onDeleteItem(selectedCard)}
              className="modal__delete-button"
              type="button"
            >
              Delete item
            </button>
          )}
        </div>
      </div>
    </Modal>
  );
}
