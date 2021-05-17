import {
    GET_COMPANIES,
    REGISTER,
    CHECK_AUTH,
    SIGNOUT,
    UPDATE,
    DELETE,
    COMPANY_ERROR,
    TOGGLE_SUCCESS,
    AUTH,
} from './../types/companyTypes';

const initialState = {
    currentCompany: null, 
    companies:[],
    companyError: null,
    companySuccess: false,
    
};



const companyReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_COMPANIES: 
            return {
            ...state,
            companies: action.payload 
            };
        case AUTH:
            return {
                ...state, 
                currentCompany: action.payload,
                companyError: null,
                companySuccess: !state.companySuccess
            };
        case CHECK_AUTH:
            return {
                ...state, 
                currentCompany: action.payload 
            };
        case SIGNOUT:
            return {
                ...state, 
                companies: action.payload 
            };
        case REGISTER:
            return {
                ...state,
                companySuccess: !state.companySuccess,
            };
        case UPDATE:
            const jwt = JSON.parse(localStorage.getItem("jwt"));
            const newJwt = {...jwt, user: action.payload};
            localStorage.setItem("jwt", JSON.stringify(newJwt));
            return {
                ...state,
                currentCompany:  {...state.currentCompany, user: action.payload},
                companySuccess: !state.companySuccess,
            };
        case DELETE:
            const updatedUsers = state.companies.filter(
                (company) => company._id !== action.payload._id);
            return {
                ...state, 
                companies: updatedUsers,
                currentUser: null,
            };
        case COMPANY_ERROR:
            return {
                ...state,
                companyError: action.payload 
            };
        case TOGGLE_SUCCESS:
            return {
               ...state, 
               companySuccess: !state.companySuccess,
            };
        default: 
        return state;
    }
}


export default companyReducer;
