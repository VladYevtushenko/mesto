export class Section {
    constructor({ renderer }, containerSelector) {
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    renderItems(items) {
        items.forEach((item) => {
            this._renderer(item);
        });
    }

    addItem(card, isPrepend = false) {
        if (isPrepend) {
            this._container.prepend(card);
        } else {
            this._container.append(card);
        }
    }
}