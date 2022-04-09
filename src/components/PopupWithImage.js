import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }
    
    open(name, link) {
        this._popup.querySelector('.popup__image-title').textContent = name;
        this._popup.querySelector('.popup__big-image').src = link;
        this._popup.querySelector('.popup__big-image').alt = name;
        super.open();
    };
}
