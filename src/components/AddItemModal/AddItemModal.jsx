import { useForm } from "../../hooks/useForm.js";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
const AddItemModal = ({ isOpen, onAddItem, handleCloseActiveModal }) => {
  const defaultValues = {
    name: "",
    imageUrl: "",
    weather: "",
  };

  const { values, handleChange } = useForm(defaultValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem(values);
  };

  return (
    <ModalWithForm
      buttonText="Add garment"
      title="New garment"
      handleCloseActiveModal={handleCloseActiveModal}
      onSubmit={handleSubmit}
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
            value={values.name}
            onChange={handleChange}
          />
        </label>
      </fieldset>

      <fieldset className="modal__fieldset">
        <label htmlFor="link" className="modal__label">
          Image
          <input
            id="link"
            className="modal__input"
            type="url"
            name="imageUrl"
            value={values.imageUrl}
            onChange={handleChange}
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
            checked={values.weather === "hot"}
            required
            onChange={handleChange}
          />
          <span className="modal__radio-text">Hot</span>
        </label>
        <label htmlFor="warm" className="modal__radio-label">
          <input
            id="warm"
            className="modal__input"
            type="radio"
            name="weather"
            value="warm"
            checked={values.weather === "warm"}
            required
            onChange={handleChange}
          />
          <span className="modal__radio-text">Warm</span>
        </label>
        <label htmlFor="cold" className="modal__radio-label">
          <input
            id="cold"
            className="modal__input"
            type="radio"
            name="weather"
            value="cold"
            checked={values.weather === "cold"}
            required
            onChange={handleChange}
          />
          <span className="modal__radio-text">Cold</span>
        </label>
      </fieldset>
    </ModalWithForm>
  );
};

export default AddItemModal;
