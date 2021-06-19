import React, { Component } from 'react';
import SearchIcon from "@material-ui/icons/Search";
import './landing.css';
import PriceComparision from './../components/PriceComparision';
import AboutUs from './../components/AboutUs';
import ContactUs from './../components/ContactUs';
import ClientsReview from './../components/ClientsReview';
import ImageSlider from './../components/ImageSlider';
import Bottom from './../components/Bottom';
import Introduction from './../components/Introduction';



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

                <Introduction></Introduction>

                <AboutUs></AboutUs>

                <div className="price_container">
                    <PriceComparision></PriceComparision>
                </div>

                <ClientsReview></ClientsReview>
            
                <ContactUs></ContactUs>

                <Bottom></Bottom>
                

            </div>
        );
    }
}

export default Landing;
