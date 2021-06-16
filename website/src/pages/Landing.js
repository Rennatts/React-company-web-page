import React, { Component } from 'react';
import SearchIcon from "@material-ui/icons/Search";
import './landing.css';
import PriceComparision from './../components/PriceComparision';


class Landing extends Component {
    render() {
        return (
            <div className="main_landing">

                <div className="landing">
                    <h1>This is the landing page</h1>

                    <div className="search_container">
                        <input type="text" className="search_input"></input>
                        <SearchIcon className="searchIcon"></SearchIcon>
                    </div>
                </div>


                <div className="price_container">
                    <PriceComparision></PriceComparision>
                </div>

            </div>
        );
    }
}

export default Landing;
