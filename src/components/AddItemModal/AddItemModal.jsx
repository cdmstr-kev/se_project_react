import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
const AddItemModal = ({
  isOpen,
  onAddItem,
  handleCloseActiveModal,
  buttonText,
}) => {

  return (
    <ModalWithForm
      buttonText="Add garment" 
      title="New garment"
      handleCloseActiveModal={handleCloseActiveModal}
      onSubmit={onAddItem}
      name="add-clothing"
      isOpen={isOpen}
    >
      <fieldset className="modal__fieldset">
        <label htmlFor="name" className="modal__label">
          Name
          <input
            id="name"
            className="modal__input"
            type="text"
            name="name"
            placeholder="Name"
            required
          />
        </label>
      </fieldset>

      <fieldset className="modal__fieldset">
        <label htmlFor="image" className="modal__label">
          Image
          <input
            id="image"
            className="modal__input"
            type="url"
            name="image"
            placeholder="Image URL"
            required
          />
        </label>
      </fieldset>

      <fieldset className="modal__fieldset">
        <legend className="modal__legend">Select the weather type:</legend>

        <label htmlFor="hot" className="modal__radio-label">
          <input
            id="hot"
            className="modal__input"
            type="radio"
            name="weather"
            value="hot"
            required
          />
          Hot
        </label>
        <label htmlFor="warm" className="modal__radio-label">
          <input
            id="warm"
            className="modal__input"
            type="radio"
            name="weather"
            value="warm"
            required
          />
          Warm
        </label>
        <label htmlFor="cold" className="modal__radio-label">
          <input
            id="cold"
            className="modal__input"
            type="radio"
            name="weather"
            value="cold"
            required
          />
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
};

export default AddItemModal;
