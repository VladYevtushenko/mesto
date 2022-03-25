import { Card } from "../components/Card.js";
import { config, FormValidator } from "../components/FormValidator.js";
import { initialCards, popupProfile, profileEditButton, userName, userAboutMe, popupCard, popupCardAddButton, popupCardForm, popupCardName, popupCardLink } from "../utils/consts.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import './index.css';

const validateProfileForm = new FormValidator(config, popupProfile);
const validateNewCardForm = new FormValidator(config, popupCard);

const userInfo = new UserInfo({
    userNameSelector: '.profile__name',
    aboutMeSelector: '.profile__about-me',
});

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