import { initialCards } from "../utils/consts.js";
import { Card } from "../components/Card.js";
import { config, FormValidator } from "../components/FormValidator.js";
import { popups, popupProfile, profileEditButton, profileForm, profileName, profileAboutMe, userName, userAboutMe, elements, container, popupViewImage, popupImage, popupImageTitle, popupCard, popupCardAddButton, popupCardForm, popupCardName, popupCardLink } from "../utils/consts.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";

const validateProfileForm = new FormValidator(config, popupProfile);
const validateNewCardForm = new FormValidator(config, popupCard);

const userInfo = new UserInfo({
    userNameSelector: '.profile__name',
    aboutMeSelector: '.profile__about-me',
});


// function openPopup(popups) {
//     popups.classList.add('popup_opened');
//     document.addEventListener('keydown', closeByEscapeBtn);
// }

// function closePopup(popups) {
//     popups.classList.remove('popup_opened');
//     document.removeEventListener('keydown', closeByEscapeBtn);
// }

// function closeByEscapeBtn (evt) {
//     if (evt.key === 'Escape') {
//         const openedPopup = document.querySelector('.popup_opened');
//         closePopup(openedPopup);
//     }
// }

validateProfileForm.enableValidation();
validateNewCardForm.enableValidation();

const profileFormPopup = new PopupWithForm({
    popupSelector: '.popup_type_profile',
    handleFormSubmit: (userData) => {
        userInfo.setUserInfo(userData);
        profileFormPopup.close();
    },
});

profileFormPopup.setEventListeners();

const openProfilePopup = () => {
    const profileInfo = userInfo.getUserInfo();
    userName.value = profileInfo.userName;
    userAboutMe.value = profileInfo.aboutMe;

    profileFormPopup.open();

    validateProfileForm.resetValidation();
}

profileEditButton.addEventListener('click', openProfilePopup);


// function handleProfileFormSubmit (evt) {
//     evt.preventDefault();
//     profileName.textContent = userName.value;
//     profileAboutMe.textContent = userAboutMe.value;
//     closePopup(popupProfile);
// }

// profileForm.addEventListener('submit', handleProfileFormSubmit);

// function editProfilePopup() {
//     userName.value = profileName.textContent;
//     userAboutMe.value = profileAboutMe.textContent;
//     openPopup(popupProfile);
//     validateProfileForm.resetValidation();
// }

// profileEditButton.addEventListener('click', editProfilePopup);

// initialCards.forEach((element) => {
//     const cardElement = createCard(element);
//     addCard(cardElement, elements);
// });

// function addCard(card) {
//     container.prepend(card)
// }

const imagePopup = new PopupWithImage('.popup_type_image');

imagePopup.setEventListeners();

const viewImage = (name, link) => {
    imagePopup.open(name, link);
};

const createCard = (item) => {
    const card = new Card(item, '#element-template', viewImage);
    const cardElement = card.generateCard();

    return cardElement;
}

const cardsList = new Section({
    renderer: (cardItem) => {
        const card = createCard(cardItem);
        cardsList.addItem(card)
    },
}, '.elements__list');

cardsList.renderItems(initialCards);

// function viewImage(name, link) {
//     popupImageTitle.textContent = name;
//     popupImage.src = link;
//     popupImage.alt = link;

//     openPopup(popupViewImage);
// }
// function openCardPopup() {
//     popupCardForm.reset();
//     openPopup(popupCard);
//     validateNewCardForm.resetValidation();
// }
// popupCardAddButton.addEventListener('click', openCardPopup);

// function handleNewCardPopupForm (evt) {
//     evt.preventDefault();

//     const newCard = {
//         name: popupCardName.value,
//         link: popupCardLink.value,
//     };
//     const cardElement = createCard(newCard);

//     addCard(cardElement, elements);
//     closePopup(popupCard);
//     popupCardForm.reset();
// }

const newCardPopup = new PopupWithForm({ 
    popupSelector: '.popup_type_card',
    handleFormSubmit: () => {
        const newCard = {
            name: popupCardName.value,
            link: popupCardLink.value,
        };
        cardsList.addItem(createCard(newCard));
        newCardPopup.close();
    },
});

newCardPopup.setEventListeners();

const openNewCardPopup = () => {
    popupCardForm.reset();
    newCardPopup.open();
    validateNewCardForm.resetValidation();
}

popupCardAddButton.addEventListener('click', openNewCardPopup);

// popupCardForm.addEventListener('submit', handleNewCardPopupForm);

// popups.forEach((popup) => {
//     popup.addEventListener('mousedown', (evt) => {
//         if (evt.target.classList.contains('popup_opened')) {
//             closePopup(popup);
//         }
//         if (evt.target.classList.contains('popup__close-button')) {
//             closePopup(popup);
//         }
//     });
// });



