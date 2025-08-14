import closeButton from "../../assets/closeButton.svg"

export default function ModalWithForm() {
  return (
    <div className="modal">
      <form className="modal__form">
        <h2 className="modal__title">New garment</h2>
        <button className="modal__close-button" type="button">
          <img src={closeButton} alt="Close" />
        </button>
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
              name="hot"
              required
            />
            Hot
          </label>
          <label htmlFor="warm" className="modal__radio-label">
            <input
              id="warm"
              className="modal__input"
              type="radio"
              name="warm"
              required
            />
            Warm
          </label>
          <label htmlFor="cold" className="modal__radio-label">
            <input
              id="cold"
              className="modal__input"
              type="radio"
              name="cold"
              required
            />
            Cold
          </label>
        </fieldset>
        <button className="modal__submit-button" type="submit">
          Add garment
        </button>
      </form>
    </div>
  );
}
