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

const popups = document.querySelectorAll('.popup');
const popupProfile = document.querySelector('.popup_type_profile');
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
const popupCardName = document.querySelector('#popupCardName');
const popupCardLink = document.querySelector('#popupImageLink');


export { initialCards, popups, popupProfile, profileEditButton, profileForm, profileName, profileAboutMe, userName, userAboutMe, elements, template, container, popupViewImage, popupImage, popupImageTitle, popupCard, popupCardAddButton, popupCardForm, popupCardName, popupCardLink };