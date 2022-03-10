import { initialCards } from "./intialCards.js";
import { Card } from "./Card.js";
import { config, FormValidator } from "./FormValidator.js";
import { popups, popupProfile, profileEditButton, profileForm, profileName, profileAboutMe, userName, userAboutMe, elements, container, popupViewImage, popupImage, popupImageTitle, popupCard, popupCardAddButton, popupCardForm, popupCardName, popupCardLink } from "./consts.js";

const validProfileForm = new FormValidator(config, popupProfile);
const validNewCardForm = new FormValidator(config, popupCard);

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

validProfileForm.enableValidation();
validNewCardForm.enableValidation();

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
    validProfileForm.resetValidation();
}

profileEditButton.addEventListener('click', editProfilePopup);

const createCard = (item) => {
    const card = new Card(item, '#element-template', viewImage);
    const cardElement = card.generateCard();

    return cardElement;
}

initialCards.forEach((element) => {
    const cardElement = createCard(element);
    addCard(cardElement, elements);
});

function addCard(card) {
    container.prepend(card)
}

function viewImage(name, link) {
    popupImageTitle.textContent = name;
    popupImage.src = link;
    popupImage.alt = link;

    openPopup(popupViewImage);
}
function openCardPopup() {
    popupCardForm.reset();
    openPopup(popupCard);
    validNewCardForm.resetValidation();
}
popupCardAddButton.addEventListener('click', openCardPopup);

function handleNewCardPopupForm (evt) {
    evt.preventDefault();

    const newCard = {
        name: popupCardName.value,
        link: popupCardLink.value,
    };
    const cardElement = createCard(newCard);

    addCard(cardElement, elements);
    closePopup(popupCard);
    popupCardForm.reset();
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



