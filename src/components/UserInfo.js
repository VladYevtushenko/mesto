export class UserInfo {
    constructor ({userNameSelector, aboutMeSelector}) {
        this._profileName = document.querySelector(userNameSelector);
        this._profileAboutMe = document.querySelector(aboutMeSelector);
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


