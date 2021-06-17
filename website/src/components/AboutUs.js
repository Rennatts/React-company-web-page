import React from 'react';
import './AboutUs.css';
import findCustomers from './../images/planning_color.png';
import handshake from './../images/handshake.png';
import growth from './../images/graph-bar.png';
import quotes from './../images/quotes.png';


function AboutUs() {
    return (
        <div className="aboutus_main_container">
            <div className="aboutus_title">
               <h2>How we can help you</h2>
            </div>
            

            <div className="features_container">
                <div className="features">
                    <div className="features_secondary">
                        <img src={findCustomers}></img>
                    </div>
                    <div className="text">
                        <p>A B2B plataform for logistics companies</p>
                    </div>
                </div>

                <div className="features">
                    <div className="features_secondary">
                        <img src={quotes}></img>
                    </div>
                    <div className="text">
                        <p>Get freight quotes</p>
                    </div>
                </div>

                <div className="features">
                    <div className="features_secondary">
                        <img src={handshake}></img>
                    </div>
                    <div className="text">
                        <p>Get new costumers</p>
                    </div>
                </div>

                
                <div className="features">
                    <div className="features_secondary">
                        <img src={growth}></img>
                    </div>
                    <div className="text">
                        <p>Increase your sales</p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default AboutUs
