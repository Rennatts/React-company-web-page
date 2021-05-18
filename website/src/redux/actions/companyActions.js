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

import axios from 'axios';
import { saveUserToLocalStorage, isLogged } from './../../help/auth';



export const register = (company) => {
    return (dispatch) => {
        axios
        .post("http://localhost:3001/companies/register", company)
        .then(res => {
            if (res.data.error) {
                dispatch({
                    type: COMPANY_ERROR,
                    payload: res.data.error
                })
            } else {
                dispatch({
                    type: REGISTER,
                    payload: res.data
                });
                console.log(res.data);
            }
        })
        .catch(err=> console.log(err))
    };
};

export const authCheck = () => {
    return dispatch => {
        dispatch({
            type: CHECK_AUTH,
            payload: isLogged() ? isLogged() : null,
        });
    };
};

export const signin = (company) => {
    return (dispatch) => {
        axios
        .post("http://localhost:3001/companies/signin", company)
        .then(res => {
            if (res.data.error) {
                dispatch({
                    type: COMPANY_ERROR,
                    payload: res.data.error
                })
            } else {
                saveUserToLocalStorage(res.data);
                dispatch({
                    type: AUTH,
                    payload: res.data
                });
            }
        })
        .catch(err=> console.log(err))

    };

};



export const getAllCompanies = (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    return (dispatch) => {
        axios
        .get("http://localhost:3001/companies/allcompanies", config)
        .then(res => {
            if (res.data.error) {
                dispatch({
                    type: COMPANY_ERROR,
                    payload: res.data.error
                })
            } else {
                dispatch({
                    type: GET_COMPANIES,
                    payload: res.data
                });
            }
        })
        .catch(err=> console.log(err))
    };

}
