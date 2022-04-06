export class Card {
    constructor(card, cardSelector, viewImage, handleDelClick) {
        this._text = card.name;
        this._link = card.link;
        this._likes = card.likes;
        this._cardSelector = cardSelector;
        this._viewImage = viewImage;
        this._card = card;
        this._handleDelClick = handleDelClick;
    }

    _getTemplate() {
        const cardElement = document
            .querySelector(this._cardSelector)
            .content
            .querySelector('.elements__card')
            .cloneNode(true);

        return cardElement;
    }

    _setEventListeners() {
        this._element
            .querySelector('.elements__delete-button')
            .addEventListener('click', () => {
                this._handleDelClick();
            });
        this._likeButton.addEventListener('click', () => {
            this._like();
        });
        this._photo.addEventListener('click', () => {
            this._viewImage(this._text, this._link);
        });
    }

    // _deleteCard() {
    //     this._element.remove();
    //     this._card = null;
    // }

    _like() {
        this._likeButton.classList.toggle('elements__like-button_active');
    }

    _setLikes() {
        const likeCountElement = this._element.querySelector('.elements__like-counter');
        likeCountElement.textContent = this._likes.length;
    }

    generateCard() {
        this._element = this._getTemplate();
        this._element.querySelector('.elements__title').textContent = this._text;
        this._photo = this._element.querySelector('.elements__photo');
        this._photo.src = this._link;
        this._photo.alt = this._text;
        this._likeButton = this._element.querySelector('.elements__like-button');
        this._setEventListeners();
        this._setLikes();

        return this._element;
    }
}