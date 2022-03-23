import { Popup } from "./Popup.js";
import { popupImage, popupImageTitle } from "../utils/consts.js";

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }
    
    open(name, link) {
        super.open();
        popupImageTitle.textContent = name;
        popupImage.src = link;
        popupImage.alt = name;
    };
}
