import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._imageTitle = document.querySelector('.popup__image-title');
        this._imageLargeView = document.querySelector('.popup__big-image');
    }
    
    open(name, link) {
        this._imageTitle.textContent = name;
        this._imageLargeView.src = link;
        this._imageLargeView.alt = name;
        super.open();
    };
}
