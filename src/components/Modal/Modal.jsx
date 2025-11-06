import useModalClose from "../../hooks/useModalClose.js";
import closeButton from "../../assets/images/closeButton.svg";
import "./Modal.css";

export const Modal = ({
  name,
  onClose,
  isOpen,
  children,
  closeButtonImage,
  containerClassName = "",
  closeButtonClassName = "",
}) => {
  useModalClose(isOpen, onClose);

  return (
    <div
      className={`modal ${isOpen ? "modal__is-open" : ""} modal_type_${name}`}
    >
      <div className={`modal__container ${containerClassName}`}>
        {children}
        <button
          className={`modal__close-button ${closeButtonClassName}`}
          type="button"
          onClick={onClose}
        >
          <img src={closeButtonImage || closeButton} alt="Close" />
        </button>
      </div>
    </div>
  );
};
