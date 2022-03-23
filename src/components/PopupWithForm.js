import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
    constructor ({ popupSelector, handleFormSubmit }) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._handleSubmit = this._handleSubmit.bind(this);
    }

    _getInputValues() {
        this._inputsList = this._popup.querySelectorAll('.popup__input');
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
        this._popup.addEventListener('submit', this._handleSubmit);
    }

    close() {
        super.close();
        this._form.reset();
        this._form.removeEventListener('submit', this._handleSubmit);
    }
}