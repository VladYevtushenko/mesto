import { initialCards } from "./intialCards.js";
import { config } from "./validation.js";

const popups = document.querySelectorAll('.popup');
const popupProfile = document.querySelector('.popup_type_profile');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileForm = document.querySelector('.popup__form_type_profile');
const profileName = document.querySelector('.profile__name');
const profileAboutMe = document.querySelector('.profile__about-me');
const userName = document.querySelector('#popupProfName');
const userAboutMe = document.querySelector('#popupProfAboutMe');
const template = document.querySelector('#element-template');
const container = template.parentElement;
const popupViewImage = document.querySelector('.popup_type_image');
const popupImage = document.querySelector('.popup__big-image');
const popupImageTitle = document.querySelector('.popup__image-title');
const popupCard = document.querySelector('.popup_type_card');
const popupCardAddButton = document.querySelector('.profile__add-button');
const popupCardForm = document.querySelector('.popup__form_type_card');
const popupCardName = document.querySelector('#popupCardName');
const popupCardLink = document.querySelector('#popupImageLink');

function openPopup(popups) {
    popups.classList.add('popup_opened');
    document.addEventListener('keydown', closeByEscapeBtn);
}

function closePopup(popups) {
    popups.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEscapeBtn);
}

function closeByEscapeBtn (evt) {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup);
    }
}

function handleProfileFormSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = userName.value;
    profileAboutMe.textContent = userAboutMe.value;
    closePopup(popupProfile);
}

profileForm.addEventListener('submit', handleProfileFormSubmit);

function editProfilePopup() {
    userName.value = profileName.textContent;
    userAboutMe.value = profileAboutMe.textContent;
    openPopup(popupProfile);
}

profileEditButton.addEventListener('click', editProfilePopup);

function likeCard (evt) {
    evt.target.classList.toggle('elements__like-button_active');   
}

function deleteCard (evt) {
    evt.target.closest('.elements__card').remove();
}

function createCard(name, link) {
    const cardElement = template.content.querySelector('.elements__card').cloneNode(true);
    const cardImage = cardElement.querySelector('.elements__photo');
    const cardName = cardElement.querySelector('.elements__title')
    const likeButton = cardElement.querySelector('.elements__like-button');
    const deleteButton = cardElement.querySelector('.elements__delete-button');

    cardImage.alt = name;
    cardName.textContent = name;
    cardImage.src = link;
    likeButton.addEventListener('click', likeCard);
    deleteButton.addEventListener('click', deleteCard);
    cardImage.addEventListener('click', () => {
        popupImage.src = cardImage.src;
        popupImageTitle.textContent = cardImage.alt;
        popupImage.alt = cardImage.alt;
        
        openPopup(popupViewImage);
    });
    return cardElement;
}

function addCard(card) {
    container.prepend(card)
}

function renderCards () {
    initialCards.forEach(function (card) {
        const cardRendering = createCard(card.name, card.link);
        addCard(cardRendering);
    })
}

renderCards();

popupCardAddButton.addEventListener('click', () => openPopup(popupCard));

function checkButtonState (element) {
    const popupSubmitButton = element.querySelector(config.submitButtonSelector);
    const isInputFilled = Array.from(element.querySelectorAll(config.inputSelector)).every((string) => string.value.length > 2);
    if (!isInputFilled) {
        popupSubmitButton.classList.add(config.inactiveButtonClass);
        popupSubmitButton.disabled = true;
    } else {
        popupSubmitButton.classList.remove(config.inactiveButtonClass);
        popupSubmitButton.disabled = false;
    }
}

function handleNewCardPopupForm (evt) {
    evt.preventDefault();
    const name = popupCardName.value;
    const link = popupCardLink.value;
    const newCardRender = createCard(name, link);
    addCard(newCardRender);
    closePopup(popupCard);
    popupCardForm.reset();
    checkButtonState(popupCardForm);
}

popupCardForm.addEventListener('submit', handleNewCardPopupForm);

popups.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
            closePopup(popup);
        }
        if (evt.target.classList.contains('popup__close-button')) {
            closePopup(popup);
        }
    });
});



