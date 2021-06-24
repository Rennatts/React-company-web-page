import React from 'react';
import {Link, withRouter, useHistory } from 'react-router-dom';
import { isAuthenticated, signout  } from './../../help/index';
import './style.css';


function Header ({ currentCompany }) {
    let history = useHistory();

    console.log(isAuthenticated());

    return (
        <header className="header sticky">
            <Link exact to="/">
            <div className="logo_container">
                <strong className="logo">LogisTech</strong>
            </div>
            </Link>

            {!isAuthenticated() && (
                <div className="header_direita">
                    <Link exact to="/login">
                        <div className="login">
                            <span>Log in</span>
                        </div>
                    </Link>

                    <Link exact to="/register">
                        <div className="cadastro_empresa">
                            <span>Register</span>
                        </div>
                    </Link>
                </div>

            )}

            {isAuthenticated() && (
                <div className="header_direita_log">
 
                <Link to={`/company/${isAuthenticated().company._id}`}  
                className="nav-link"
                href="#">
                {`${isAuthenticated().company.company_name}´s profile`} 
                </Link> 

                <Link className="nav-link"
                onClick={()=> signout(()=> history.push('/'))}>
                    <div>
                        <span>log out</span>
                    </div>
                </Link>
                </div>

            )}
        </header>
    );
}

export default Header;