import london from '../images/biel-morro-wydEbTWhzTc-unsplash.jpg';
import luvr from '../images/patrick-langwallner-TTz_H1FrdIc-unsplash.jpg';
import beladgio from '../images/luca-j-60LHJ-wdcgk-unsplash.jpg';
import moscowCity from '../images/alexandr-bormotin-jj3PpeBIlLA-unsplash.jpg';
import sochi from '../images/dima-fedorov-ZZkw00YCY1E-unsplash.jpg';
import stPeterburg from '../images/ilya-bronskiy-7haj8Ca19Ts-unsplash.jpg';

const initialCards = [
    {
        name: 'Лондон',
        link: london
    },
    {
        name: 'Лувр',
        link: luvr
    },
    {
        name: 'Белладжо',
        link: beladgio
    },
    {
        name: 'Москва-Сити',
        link: moscowCity
    },
    {
        name: 'Морпорт Сочи',
        link: sochi
    },
    {
        name: 'Санкт-Петербург',
        link: stPeterburg
    },
];

const popups = document.querySelectorAll('.popup');
const popupProfile = document.querySelector('.popup_type_profile');
const avatarPopup = document.querySelector('.popup_type_avatar');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileForm = document.querySelector('.popup__form_type_profile');
const profileName = document.querySelector('.profile__name');
const profileAboutMe = document.querySelector('.profile__about-me');
const userName = document.querySelector('#popupProfName');
const userAboutMe = document.querySelector('#popupProfAboutMe');
const elements = document.querySelector('.elements__list');
const template = document.querySelector('#element-template');
const container = template.parentElement;
const popupViewImage = document.querySelector('.popup_type_image');
const popupImage = document.querySelector('.popup__big-image');
const popupImageTitle = document.querySelector('.popup__image-title');
const popupCard = document.querySelector('.popup_type_card');
const popupCardAddButton = document.querySelector('.profile__add-button');
const popupCardForm = document.querySelector('.popup__form_type_card');
const avatarEdit = document.querySelector('.profile__avatar-edit');

export { initialCards, popups, popupProfile, avatarPopup, profileEditButton, profileForm, profileName, profileAboutMe, userName, userAboutMe, elements, template, container, popupViewImage, popupImage, popupImageTitle, popupCard, popupCardAddButton, popupCardForm, avatarEdit };

export const config = ({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible',
}); 