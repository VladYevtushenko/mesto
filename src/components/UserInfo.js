export class UserInfo {
    constructor ({userNameSelector, aboutMeSelector, avatarSelector}) {
        this._profileName = document.querySelector(userNameSelector);
        this._profileAboutMe = document.querySelector(aboutMeSelector);
        this._avatarSelector = document.querySelector(avatarSelector);
    }
    
    getUserInfo() {
        return {
            userName: this._profileName.textContent,
            aboutMe: this._profileAboutMe.textContent,
            avatar: this._avatarSelector.src,
        };
    }

    setUserInfo(userName, aboutMe, avatar) {
        this._profileName.textContent = userName;
        this._profileAboutMe.textContent = aboutMe;
        this._avatarSelector.src = avatar;
    }
}


