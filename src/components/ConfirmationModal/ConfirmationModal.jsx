import { Modal } from "../Modal/Modal.jsx";
import "./ConfirmationModal.css";

const ConfirmationModal = ({
  activeModal,
  handleCloseActiveModal,
  onDeleteClick,
  itemToDelete,
}) => {
  const isOpen = activeModal === "delete-confirmation";

  const handleConfirm = () => {
    onDeleteClick(itemToDelete);
  };

  return (
    <Modal
      name="delete-confirmation"
      onClose={handleCloseActiveModal}
      isOpen={isOpen}
      containerClassName="modal__container_type_confirmation"
    >
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
    </Modal>
  );
};

export default ConfirmationModal;
