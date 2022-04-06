export class Card {
    constructor(card, cardSelector, viewImage, handleDelClick) {
        this._card = card;
        this._text = card.name;
        this._link = card.link;
        this._likes = card.likes;
        this._id = card.id;
        this._userId = card.userId;
        this._ownerId = card.ownerId;

        this._cardSelector = cardSelector;
        this._viewImage = viewImage;
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
        this._deleteButton.addEventListener('click', () => {
                this._handleDelClick(this._id);
            });
        this._likeButton.addEventListener('click', () => {
            this._like();
        });
        this._photo.addEventListener('click', () => {
            this._viewImage(this._text, this._link);
        });
    }

    deleteCard() {
        this._element.remove();
        this._card = null;
    }

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
        this._deleteButton = this._element.querySelector('.elements__delete-button');
        this._setEventListeners();
        this._setLikes();
        
        if (this._ownerId !== this._userId) {
            this._deleteButton.style.display = 'none'
        };

        return this._element;
    }
}