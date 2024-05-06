//import jwt_decode from "jwt-decode";
const sessionKey = 'adminToken';
//const sessionUserKey = 'user';

class AuthHelper {
   // constructor() {}
    isAuthenticated() {
        const token = this.getToken();
        if (!token) {
            return false;
        }
        return true;
    }

    getToken() {
        return localStorage.getItem(sessionKey) || null;
    }

    getUserData() {
        return this.getToken() ? [] : [];
    }

    setToken(userToken) {
        localStorage.setItem(sessionKey, userToken);
    }

    removeAuthData() {
        this.removeToken();
    }
    removeToken() {
        localStorage.removeItem(sessionKey);
    }
}

const authHelper = new AuthHelper()

export default authHelper;
