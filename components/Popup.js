export class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
        this._popup = document.querySelector(popupSelector);
        this._closeByEscapeBtn = this._closeByEscapeBtn.bind(this);
    }

    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keyup', this._closeByEscapeBtn);
    }

    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keyup',this._closeByEscapeBtn);
    }

    _closeByEscapeBtn (evt) {
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    setEventListeners() {
        this._popup.addEventListener('mousedown', (evt) => {
            if (evt.target.classList.contains('popup_opened')) {
                this.close();
            }
            if (evt.target.classList.contains('popup__close-button')) {
                this.close();
            }
        });
    }

}