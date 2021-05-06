import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';


function Header () {
    return (
        <header className="header">
            <Link to="/">
            <div className="logo_container">
                <strong className="logo">LogisTech</strong>
            </div>
            </Link>


            <div className="header_direita">
                <Link to="/login">
                <div className="login">
                    <span>Log in</span>
                </div>
                </Link>

                <Link>
                <div className="contato">
                    <span>Contact</span>
                </div>
                </Link>

                <Link to="/cadastroempresa">
                <div className="cadastro_empresa">
                    <span>Register your company</span>
                </div>
                </Link>

            </div>
        </header>
    );
}

export default Header;