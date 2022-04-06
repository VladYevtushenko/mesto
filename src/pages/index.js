import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { config } from "../utils/consts.js";
import { popupProfile, avatarPopup, profileEditButton, userName, userAboutMe, popupCard, popupCardAddButton, popupCardForm, avatarEdit } from "../utils/consts.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { api } from "../components/Api.js";
import './index.css';

api.getProfile()
    .then(res => {
        userInfo.setUserInfo(res.name, res.about, res.avatar)
    })

api.getInitialCards()
    .then(cards => {
        cards.forEach(res => {
            const card = createCard({
                name: res.name,
                link: res.link,
                likes: res.likes
            })

            cardsList.addItem(card)
        })
    })

const validateProfileForm = new FormValidator(config, popupProfile);
const validateNewCardForm = new FormValidator(config, popupCard);
const validateAvatarForm = new FormValidator(config, avatarPopup)

const userInfo = new UserInfo({
    userNameSelector: '.profile__name',
    aboutMeSelector: '.profile__about-me',
    avatarSelector: '.profile__avatar',
});

validateProfileForm.enableValidation();
validateNewCardForm.enableValidation();
validateAvatarForm.enableValidation();

// const avatarFormPopup = new PopupWithForm({
//     popupSelector: '.popup_type_avatar',
//     handleFormSubmit: (element) => {
//         // avatarFormPopup.renderLoading('Сохранение...');
//         avatarLink.vlaue = element.src;
//         console.log({element});
//     }
// });

// avatarFormPopup.setEventListeners();

// const openAvatarPopup = () => {
//     avatarFormPopup.open();
//     validateAvatarForm.resetValidation();
// };

// avatarEdit.addEventListener('click', openAvatarPopup);

const profileFormPopup = new PopupWithForm({
    popupSelector: '.popup_type_profile',
    handleFormSubmit: (userData) => {
        profileFormPopup.renderLoading('Сохранение...');
        api
        .editProfile(userData)
        .then(res => {
            console.log('res', res)
            userInfo.setUserInfo(res.name, res.about, res.avatar)
        })
        .then(() => profileFormPopup.close())
        .catch((err) => console.log(err))
        .finally(() => profileFormPopup.renderLoading());
    },
});

profileFormPopup.setEventListeners();

const openProfilePopup = () => {
    const profileInfo = userInfo.getUserInfo();
    userName.value = profileInfo.userName;
    userAboutMe.value = profileInfo.aboutMe;

    validateProfileForm.resetValidation();

    profileFormPopup.open();
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

// cardsList.renderItems(initialCards);

const newCardPopup = new PopupWithForm({ 
    popupSelector: '.popup_type_card',
    handleFormSubmit: (card) => {
        profileFormPopup.renderLoading('Сохранение...');
        
        api
            .postCard(card)
            .then(res => {
                console.log('res', res)
                cardsList.addItem(createCard(res));
            })
            .then(()=> newCardPopup.close())
            .catch((err) => console.log(err))
            .finally(() => profileFormPopup.renderLoading());
            
    },
});

newCardPopup.setEventListeners();

const openNewCardPopup = () => {
    popupCardForm.reset();
    validateNewCardForm.resetValidation();
    newCardPopup.open();
}

popupCardAddButton.addEventListener('click', openNewCardPopup);