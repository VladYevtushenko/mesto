const initialCards = [
    {
        name: 'Лондон',
        link: './images/biel-morro-wydEbTWhzTc-unsplash.jpg',
    },
    {
        name: 'Лувр',
        link: './images/patrick-langwallner-TTz_H1FrdIc-unsplash.jpg',
    },
    {
        name: 'Белладжо',
        link: './images/luca-j-60LHJ-wdcgk-unsplash.jpg',
    },
    {
        name: 'Москва-Сити',
        link: './images/alexandr-bormotin-jj3PpeBIlLA-unsplash.jpg',
    },
    {
        name: 'Морпорт Сочи',
        link: './images/dima-fedorov-ZZkw00YCY1E-unsplash.jpg',
    },
    {
        name: 'Санкт-Петербург',
        link: './images/ilya-bronskiy-7haj8Ca19Ts-unsplash.jpg',
    },
];
const popup = document.querySelectorAll('.popup');
const popupProfile = document.querySelector('.popup_type_profile');
const profileEditButton = document.querySelector('.profile__edit-button');
const popupProfileSaveButton = document.querySelector('.popup__info-area_type_profile');
const popupProfileCloseButton = document.querySelector('.popup__close-button_type_profile');
const profileName = document.querySelector('.profile__name');
const profileAboutMe = document.querySelector('.profile__about-me');
const userName = document.querySelector('#popupProfName');
const userAboutMe = document.querySelector('#popupProfAboutMe');
const template = document.querySelector('#element-template');
const container = template.parentElement;
const popupViewImage = document.querySelector('.popup_type_image');
const popupImageCloseButton = document.querySelector('.popup__close-button_type_image');
const popupCard = document.querySelector('.popup_type_card');
const popupCardForm = document.querySelector('.popup__info-area_type_card');
const popupCardAddButton = document.querySelector('.profile__add-button');
const popupCardCloseButton = document.querySelector('#popupCardCloseButton');

function popupOpen(popup) {
    popup.classList.add('popup_opened');
}

function popupClose(popup) {
    popup.classList.remove('popup_opened');
}

function popupProfileSave (evt) {
    evt.preventDefault();
    profileName.textContent = userName.value;
    profileAboutMe.textContent = userAboutMe.value;
    popupProfile.classList.remove('popup_opened');
}
    
popupProfileSaveButton.addEventListener('submit', popupProfileSave);

function popupProfileEditing() {
    userName.value = profileName.textContent;
    userAboutMe.value = profileAboutMe.textContent;
    popupOpen(popupProfile);
}

profileEditButton.addEventListener('click', popupProfileEditing);

popupProfileCloseButton.addEventListener('click', () => popupClose(popupProfile));

function viewImage (evt) {
    const image = evt.target;
    const popupImage = document.querySelector('.popup__big-image');
    const popupImageTitle = document.querySelector('.popup__image-title');
    popupImage.src = image.src;
    popupImageTitle.textContent = image.alt;
    popupImage.alt = image.alt;
    popupOpen(popupViewImage);
};

popupImageCloseButton.addEventListener('click', () => popupClose(popupViewImage));

function cardTemplate(name, link) {
    const cardElement = template.content.querySelector('.elements__card').cloneNode(true);
    cardElement.querySelector('.elements__photo').alt = name;
    cardElement.querySelector('.elements__title').textContent = name;
    cardElement.querySelector('.elements__photo').src = link;

    const likeButton = cardElement.querySelector('.elements__like-button');
    likeButton.onclick = () => {
        likeButton.classList.toggle('elements__like-button_active');
    };

    const deleteButton = cardElement.querySelector('.elements__delete-button');
    deleteButton.onclick = (evt) => {
        evt.target.closest('.elements__card').remove();
    };
    const cardBigImage = cardElement.querySelector('.elements__photo');
    cardBigImage.addEventListener('click', viewImage);

    return cardElement;
};

function addCard(card) {
    container.prepend(card)
}

function renderCards () {
    initialCards.forEach(function (card) {
        const cardRendering = cardTemplate(card.name, card.link);
        addCard(cardRendering);
    })
};

renderCards();

popupCardAddButton.addEventListener('click', () => popupOpen(popupCard));

function popupNewCardForm (evt) {
    evt.preventDefault();
    const popupCardName = document.querySelector('#popupCardName').value;
    const popupCardLink = document.querySelector('#popupImageLink').value;
    const newCardRendering = cardTemplate(popupCardName, popupCardLink);
    addCard(newCardRendering);
    popupClose(popupCard);
    popupCardForm.reset();
};

popupCardForm.addEventListener('submit', popupNewCardForm);

popupCardCloseButton.addEventListener('click', () => popupClose(popupCard));






