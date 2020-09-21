const TOKEN_KEY = 'DWEET_USER_TOKEN';

export const login = (token) => {
    localStorage.setItem(TOKEN_KEY, token);
}

export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem("DWEET_USERNAME")
}

export const getLoginKey = () => {
    var value = localStorage.getItem(TOKEN_KEY);
    return value
}

export const isLogin = () => {
    if (localStorage.getItem(TOKEN_KEY)) {
        return true;
    }

    return false;
}