import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, connect } from 'react-redux';
import { register } from '../../redux/actions/companyActions';
import './register.css';


import {
    TOGGLE_SUCCESS
} from '../../redux/types/companyTypes';




function Register({ companyError, companySuccess }) {
    const[ company, setCompany ] = useState({
        company_name: "",
        email: "",
        password: "",
        city: "",
        state: "",
        address: "",
        zip_code: ""
    });

    const dispatch = useDispatch();

    const { company_name, email, password, city, state, address, zip_code } = company;

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



    function redirectUser(){
        return success && <Redirect to="/signin"></Redirect>

    };


    function handleInputChange(event) {
        setError("");
        setCompany({...company, [event.target.name]: event.target.value});
    };

    function showError() {
        return error && <div className="alert alert-danger">{error}</div>
    };
    

    function handleFormSubmit(event){
        event.preventDefault();
        dispatch(register(company));
    };




    return (
        <div className="register_container">

            {showError()}

            {redirectUser()}

            <form className="register_form">
            <h2 className="title">Signup</h2>
                <div className="register_input">
                    <label>Company name</label>
                    <input 
                    onChange={(event)=> handleInputChange(event)} 
                    type="text" 
                    name="company_name"
                    required
                    className="register_form_control"
                    value={company_name}></input>
                </div>
                

                <div className="register_input">
                    <label>email</label>
                    <input 
                    onChange={(event)=> handleInputChange(event)} 
                    type="email" 
                    name= "email"
                    required
                    className="register_form_control"
                    value={email}></input>
                </div>

                <div className="register_input">
                    <label>city</label>
                    <input 
                    onChange={(event)=> handleInputChange(event)} 
                    type="city" 
                    name= "city"
                    required
                    className="register_form_control"
                    value={city}></input>
                </div>

                <div className="register_input">
                    <label>state</label>
                    <input 
                    onChange={(event)=> handleInputChange(event)} 
                    type="state" 
                    name= "state"
                    required
                    className="register_form_control"
                    value={state}></input>
                </div>

                <div className="register_input">
                    <label>address</label>
                    <input 
                    onChange={(event)=> handleInputChange(event)} 
                    type="address" 
                    name= "address"
                    required
                    className="register_form_control"
                    value={address}></input>
                </div>

                <div className="register_input">
                    <label>zip cide</label>
                    <input 
                    onChange={(event)=> handleInputChange(event)} 
                    type="zip_code" 
                    name= "zip_code"
                    required
                    className="register_form_control"
                    value={zip_code}></input>
                </div>

                <div className="register_input">
                    <label>Password</label>
                    <input 
                    onChange={(event)=> handleInputChange(event)} 
                    type="password" 
                    name= "password"
                    required
                    className="register_form_control"
                    value={password}></input>
                </div>

                <div className="inputbox">
                   <button className="register_btn" onClick={handleFormSubmit}>Submit</button>
                </div>
            </form>
            
        </div>
    )


};


const mapStateToProps = ({company: {companyError, companySuccess}}) => ({
    companyError,
    companySuccess

});


export default connect(mapStateToProps, null)(Register);

