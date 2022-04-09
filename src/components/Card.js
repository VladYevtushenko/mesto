export class Card {
    constructor(card, cardSelector, viewImage, handleDelClick, handleLikeClick) {
        this._card = card;
        this._text = card.name;
        this._link = card.link;
        this._likes = card.likes;
        this._id = card._id;
        this._userId = card.userId;
        this._ownerId = card.owner._id;

        this._cardSelector = cardSelector;
        this._viewImage = viewImage;
        this._handleDelClick = handleDelClick;
        this._handleLikeClick = handleLikeClick;
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
            this._handleLikeClick(this._id);
        });
        this._photo.addEventListener('click', () => {
            this._viewImage(this._text, this._link);
        });
    }

    deleteCard() {
        this._element.remove();
        this._card = null;
    }

    isLiked() {
        const cardLikeHandler = this._likes.find(user => user._id === this._userId);
        return cardLikeHandler;
    }

    _liked() {
        this._likeButton.classList.add('elements__like-button_active');
    }

    _disliked() {
        this._likeButton.classList.remove('elements__like-button_active');
    }

    setLikes(newLikes) {
        this._likes = newLikes;
        const likeCountElement = this._element.querySelector('.elements__like-counter');
        likeCountElement.textContent = this._likes.length;

        if(this.isLiked()) {
            this._liked()
        } else {
            this._disliked()
        }
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
        this.setLikes(this._likes);
        
        if (this._ownerId !== this._userId) {
            this._deleteButton.style.display = 'none'
        };

        return this._element;
    }
}