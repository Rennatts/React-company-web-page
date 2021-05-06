import React, { Component } from 'react';
import Header from '../../components/header/Header';
import './style.css';

class Login extends Component {
    render() {
        return (
            <div className="my_account">
                <Header></Header>

                <div className="container">
                    <div className="form">
                        <h2>Login</h2>
                        <div className="input">
                            <div className="inputbox">
                                <label>Email</label>
                                <input type="text" placeholder="mail@email.com"></input>
                            </div>
                            <div className="inputbox">
                                <label>Keyword</label>
                                <input type="text" placeholder="..."></input>
                            </div>
                            <div className="inputbox">
                                <label>Email</label>
                                <input type="submit" value="Sign In"></input>
                            </div>
                        </div>
                        <p className="forget">Forgot password? CLICK HERE</p>
                    </div> 

                </div>

            </div>
        );
    }
}

export default Login;
