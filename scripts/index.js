const initialCards = [
    {
        name: 'Карачаево-Черкесия',
        link: '../images/kirill-pershin-1088404-unsplash.png',
    },
    {
        name: 'Гора Эльбрус',
        link: '../images/kirill-pershin-1404681-unsplash.png',
    },
    {
        name: 'Домбай',
        link: '../images/kirill-pershin-1556355-unsplash.png',
    },
    {
        name: 'Москва-Сити',
        link: '../images/alexandr-bormotin-jj3PpeBIlLA-unsplash.jpg',
    },
    {
        name: 'Морпорт Сочи',
        link: '../images/dima-fedorov-ZZkw00YCY1E-unsplash.jpg',
    },
    {
        name: 'Санкт-Петербург',
        link: '../images/ilya-bronskiy-7haj8Ca19Ts-unsplash.jpg',
    },
];

const profileEditing = document.querySelector('.profile__edit-button');
const popupClose = document.querySelector('.popup__close-button');
const popup = document.querySelector('.popup');
const profileName = document.querySelector('.profile__name');
const profileAboutMe = document.querySelector('.profile__about-me');
const userName = document.querySelector('#popupProfName');
const userAboutMe = document.querySelector('#popupProfAboutMe');
const popupForm = document.querySelector('.popup__container');

let stateCards = [...initialCards];
const template = document.querySelector('#element-template');
const container = template.parentElement;
const cardTemplate = template.content;

const clearCards = () => {
    container.querySelectorAll('.elements__card').forEach((cardElement, index) => cardElement.remove());
};

const addCard = (card, index) => {
    const cardElement = cardTemplate.querySelector('.elements__card').cloneNode(true);
    cardElement.querySelector('.elements__photo').alt = card.name;
    cardElement.querySelector('.elements__title').textContent = card.name;
    cardElement.querySelector('.elements__photo').src = card.link;

    const likeButton = cardElement.querySelector('.elements__like-button');
    likeButton.onclick = () => {
        likeButton.classList.toggle('elements__like-button_active');
    };

    const deleteButton = cardElement.querySelector('.elements__delete-button');
    deleteButton.onclick = () => {
    stateCards = [...stateCards.slice(0, index),...stateCards.slice(index + 1),];
    clearCards();
    renderCards();
    };
    container.append(cardElement);
};

const renderCards = () => {
    stateCards.forEach(addCard);
};

renderCards();

// addCard({
//     name: 'Гора Эльбрус2',
//     link: '../images/kirill-pershin-1404681-unsplash.png',
//   }, initialCards.length);

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
