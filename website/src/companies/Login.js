import React, { useState, useEffect } from 'react';
import {Redirect} from 'react-router-dom';
import { useDispatch, connect } from 'react-redux';
import { signin } from './../redux/actions/companyActions';
import './login.css';
import {Link } from 'react-router-dom';

import {
    TOGGLE_SUCCESS
} from '../redux/types/companyTypes';


function Login({companyError, companySuccess}) {

    const[ company, setCompany ] = useState({
        email: "",
        password: ""
    });

    const dispatch = useDispatch();

    const {email, password} = company;

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);


    useEffect(() => {
        if ( companyError && companyError !== null ) {
            setError(companyError);
        }
        if(companySuccess) {
            setSuccess(companySuccess);
            dispatch({type: TOGGLE_SUCCESS})
        }
    }, [companyError, companySuccess, dispatch]);


    function showError() {
        return error && <div className="alert alert-danger">{error}</div>
    };


    function redirectUser(){
        return success && <Redirect to="/"></Redirect>

    };


    function handleInputChange(event) {
        setCompany({...company, [event.target.name]: event.target.value});
    };
    

    function handleFormSubmit(event){
        event.preventDefault();
        dispatch(signin(company));
    };

    return (
        <div className="login_container">

            {showError()}

            {redirectUser()}

            <form className="login_form">
            <h2 className="title">Log in</h2>

                <div className="login_input">
                    <label>Email</label>
                    <input 
                    onChange={(event)=> handleInputChange(event)} 
                    type="email" 
                    name= "email"
                    required
                    className="signin_form-control"
                    value={email}></input>
                </div>

                <div className="login_input">
                    <label>Password</label>
                    <input 
                    onChange={(event)=> handleInputChange(event)} 
                    type="password" 
                    name= "password"
                    required
                    className="signin_form-control"
                    value={password}></input>
                </div>

                <div><Link className="forgot">Forgot Password?</Link></div>

                <div className="inputbox">
                   <button className="register_btn" onClick={handleFormSubmit}>Submit</button>
                </div>

            </form>
            
        </div>
    );

};

const mapStateToProps = ({company: {companyError, companySuccess}}) => ({
    companyError,
    companySuccess

});


export default connect(mapStateToProps, null)(Login);
