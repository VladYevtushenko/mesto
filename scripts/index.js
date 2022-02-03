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

const template = document.querySelector('#element-template');
const container = template.parentElement;

let stateCards = [...initialCards];

const clearCards = () => {
    container.querySelectorAll('.elements__card').forEach((cardElement) => cardElement.remove());
};

const addCard = (card, index) => {
    const cardElement = template.content.querySelector('.elements__card').cloneNode(true);
    cardElement.querySelector('.elements__photo').alt = card.name;
    cardElement.querySelector('.elements__title').textContent = card.name;
    cardElement.querySelector('.elements__photo').src = card.link;


    const likeButton = cardElement.querySelector('.elements__like-button');
    likeButton.onclick = () => {
        likeButton.classList.toggle('elements__like-button_active');
    };

    const deleteButton = cardElement.querySelector('.elements__delete-button');
    deleteButton.onclick = () => {
        stateCards = [...stateCards.slice(0, index), ...stateCards.slice(index + 1)];
        clearCards();
        renderCards();
    };

    const cardBigImage = cardElement.querySelector('.elements__photo');
    const popupViewImage = document.querySelector('.popup_type_image');

    cardBigImage.onclick = (evt) => {
        const image = evt.target;

        const popupImage = document.querySelector('.popup__big-image');
        const popupImageTitle = document.querySelector('.popup__image-title');
        popupImage.src = image.src;
        popupImageTitle.textContent = image.alt;
        popupImage.alt = image.alt;
        popupViewImage.classList.add('popup_opened');
    };

    const popupImageCloseButton = document.querySelector('#popupImageCloseButton');

    popupImageCloseButton.onclick = () => {
        popupViewImage.classList.remove('popup_opened');
    };

    container.append(cardElement);
};

const renderCards = () => {
    stateCards.forEach(addCard);
};

renderCards();


const popupCardAddButton = document.querySelector('.profile__add-button');

popupCardAddButton.onclick = () => {
    const popupCard = document.querySelector('.popup_type_card');
    const popupCardCreateButton = document.querySelector('#popupCardCreateBtn');
    
    popupCardCreateButton.onclick = (evt) => {
        evt.preventDefault();
        const popupCardName = document.querySelector('#popupCardName');
        const popupImageLink = document.querySelector('#popupImageLink');
    
        const newCard = {
            name: popupCardName.value,
            link: popupImageLink.value,
        }; 
        stateCards = [newCard, ...stateCards];
        clearCards();
        renderCards();
        popupCard.classList.remove('popup_opened');
    };
    
    const popupCardCloseButton = document.querySelector('#popupCardCloseButton');
    popupCardCloseButton.onclick = () => {
        popupCard.classList.remove('popup_opened');
    };    

    popupCard.classList.add('popup_opened');
    popupCardName.value = ''; 
    popupImageLink.value = '';
    
};


const profileEditing = document.querySelector('.profile__edit-button');

profileEditing.onclick = () => {
    const popup = document.querySelector('.popup');
    const popupProfileSaveButton = document.querySelector('.popup__save-button');
    const profileName = document.querySelector('.profile__name');
    const profileAboutMe = document.querySelector('.profile__about-me');
    const userName = document.querySelector('#popupProfName');
    const userAboutMe = document.querySelector('#popupProfAboutMe');

    popupProfileSaveButton.onclick = (evt) => {
        evt.preventDefault();
        profileName.textContent = userName.value;
        profileAboutMe.textContent = userAboutMe.value;
        popup.classList.remove('popup_opened');
    };
    
    const popupClose = document.querySelector('.popup__close-button');
    
    popupClose.onclick = () => {
        popup.classList.remove('popup_opened');
    };
    
    userName.value = profileName.textContent;
    userAboutMe.value = profileAboutMe.textContent;
    popup.classList.add('popup_opened');
};
