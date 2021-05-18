export const isAuthenticated = () => {
    if(typeof window === "undefined") {
        return false
    }

    if(localStorage.getItem("jwt")) {
        return JSON.parse(localStorage.getItem("jwt"))
    } else {
        return false
    }

};



export const signout = (next) => {
    if(typeof window !== "undefined"){
        localStorage.removeItem("jwt")
    } 
    next()
    return fetch(`http://localhost:3001/companies/signout`, {
        method: "GET"
    })
    .then(res => {
        console.log(res);
        return res.json()

    })
    .catch(err => console.log(err))

};





export const updateCompany = ( company ) => {
    if(typeof window !== "undefined") {
        if(localStorage.getItem('jwt')) {
            let auth = JSON.parse(localStorage.getItem('jwt'))
            auth.company = company
            localStorage.setItem('jwt', JSON.stringify(auth))
        }
        
    };

};

