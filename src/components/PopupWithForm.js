import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
    constructor ({ popupSelector, handleFormSubmit }) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._handleSubmit = this._handleSubmit.bind(this);
        this._form = this._popup.querySelector('.popup__form');
        this._inputsList = this._popup.querySelectorAll('.popup__input');
        this._saveButton = this._popup.querySelector('.popup__save-button');
    }

    _getInputValues() {
        this._formValues = {};
        this._inputsList.forEach((input) => {
            this._formValues[input.name] = input.value;
        });
        return this._formValues;
    }

    _handleSubmit(evt) {
        evt.preventDefault();
        this._handleFormSubmit(this._getInputValues());
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', this._handleSubmit);
    }

    close() {
        super.close();
        this._form.reset();
    }

    renderLoading(buttonName) {
        this._saveButton.textContent = buttonName;
    }
}