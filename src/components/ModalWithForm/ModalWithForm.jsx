import { Modal } from "../Modal/Modal.jsx";
import "./ModalWithForm.css";

export default function ModalWithForm({
  children,
  buttonText,
  title,
  name,
  isOpen,
  handleCloseActiveModal,
  onSubmit,
}) {
  return (
    <Modal name={name} onClose={handleCloseActiveModal} isOpen={isOpen}>
      <h2 className="modal__title">{title}</h2>
      <form className="modal__form" onSubmit={onSubmit}>
        {children}
        <button className="modal__submit-button" type="submit">
          {buttonText}
        </button>
      </form>
    </Modal>
  );
}
