import  { initialCards } from "./elements"

const profileEditing = document.querySelector('.profile__edit-button');

const popupClose = document.querySelector('.popup__close-button');

const popup = document.querySelector('.popup');

const profileName = document.querySelector('.profile__name');

const profileAboutMe = document.querySelector('.profile__about-me');

const userName = document.querySelector('#popupProfName');

const userAboutMe = document.querySelector('#popupProfAboutMe');

const popupForm = document.querySelector('.popup__container');

function profilePopupOpen() {
    userName.value = profileName.textContent;
    userAboutMe.value = profileAboutMe.textContent;
    popup.classList.add('popup_opened'); 
}

function profilePopupClose() {
    popup.classList.remove('popup_opened');
}

function popupSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = userName.value;
    profileAboutMe.textContent = userAboutMe.value;
    profilePopupClose();
}
profileEditing.addEventListener('click', profilePopupOpen);

popupClose.addEventListener('click', profilePopupClose);

popupForm.addEventListener('submit', popupSubmit);