export class UserInfo {
    constructor ({userNameSelector, aboutMeSelector}) {
        this._userNameSelector = userNameSelector;
        this._aboutMeSelector = aboutMeSelector;
        this._profileName = document.querySelector(this._userNameSelector);
        this._profileAboutMe = document.querySelector(this._aboutMeSelector);
    }
    
    getUserInfo() {
        const userData = {
            userName: this._profileName.textContent,
            aboutMe: this._profileAboutMe.textContent,
        };

        return userData;
    }

    setUserInfo(userData) {
        this._profileName.textContent = userData.userName;
        this._profileAboutMe.textContent = userData.aboutMe;
    }
}


