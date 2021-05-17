export const saveUserToLocalStorage = (jwt) => {
    localStorage.setItem("jwt", JSON.stringify(jwt));
}


export const isLogged = () => {
    if(localStorage.getItem("jwt")) {
        return JSON.parse(localStorage.getItem("jwt"));
    } else {
        return false;
    }
}


export const logout = (cb) => {
    localStorage.removeItem("jwt");
    document.cookie = "t=;expires=Thu, 01 Jan 1970 00:00:00 UCT;path=/";
    cb();
}



export const checkAuth = (companyId) => {
    return isLogged().company._id === companyId;
}



