import closeButton from "../../assets/images/closebutton.svg";
import "./ConfirmationModal.css";

const ConfirmationModal = ({
  activeModal,
  handleCloseActiveModal,
  onDeleteClick,
  itemToDelete,
}) => {
  const handleConfirm = () => {
    onDeleteClick(itemToDelete);
  };

  return (
    <div
      className={`modal ${
        activeModal === "delete-confirmation" ? "modal__is-open" : ""
      }`}
    >
      <div className="modal__content modal__content_type_confirmation">
        <button
          className="modal__close-button"
          type="button"
          onClick={handleCloseActiveModal}
        >
          <img src={closeButton} alt="Close" />
        </button>
        <p className="modal__text">
          Are you sure you want to delete this item?
          <br />
          This action is irreversible.
        </p>
        <div className="modal__buttons">
          <button
            className="modal__button modal__button_type_confirm"
            onClick={handleConfirm}
          >
            Yes, delete it
          </button>
          <button
            className="modal__button modal__button_type_cancel"
            onClick={handleCloseActiveModal}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
