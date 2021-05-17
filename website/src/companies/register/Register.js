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
        password: ""

    });

    const dispatch = useDispatch();

    const { company_name, email, password } = company;

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
        <div className="container">
            <h2 className="title">Signup</h2>

            {showError()}

            {redirectUser()}

            <form className="form">
                <div className="input">
                    <label>Company name</label>
                    <input 
                    onChange={(event)=> handleInputChange(event)} 
                    type="text" 
                    name="company_name"
                    required
                    className="form-control"
                    value={company_name}></input>
                </div>

                <div className="input">
                    <label>email</label>
                    <input 
                    onChange={(event)=> handleInputChange(event)} 
                    type="email" 
                    name= "email"
                    required
                    className="form-control"
                    value={email}></input>
                </div>

                <div className="input">
                    <label>Password</label>
                    <input 
                    onChange={(event)=> handleInputChange(event)} 
                    type="password" 
                    name= "password"
                    required
                    className="form-control"
                    value={password}></input>
                </div>

                <button className="inputbox" onClick={handleFormSubmit} className="btn btn-raised btn-primary">Submit</button>
                
            </form>
            
        </div>
    )
};


const mapStateToProps = ({company: {companyError, companySuccess}}) => ({
    companyError,
    companySuccess

});


export default connect(mapStateToProps, null)(Register);

