import React, { Component } from 'react';
import SearchIcon from "@material-ui/icons/Search";
import './style.css';
import Header from '../../components/header/Header';


class Landing extends Component {
    render() {
        return (
            <div className="main_landing">
                <Header></Header>

                <div className="landing">
                    <h1>This is the landing page</h1>

                    <div className="search_container">
                        <input type="text" className="search_input"></input>
                        <SearchIcon className="searchIcon"></SearchIcon>
                    </div>
                </div>


                <div className="content">
                    <h1>More content here</h1>
                </div>

            </div>
        );
    }
}

export default Landing;
