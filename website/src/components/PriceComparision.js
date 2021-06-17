import React from 'react';
import './PriceComparision.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";


function PriceComparision() {
    return (
        <div class="price-comparison">

            <div class="price-column">
                <div class="price-header">
                    <div class="price-section">
                        <div class="dolar-sign">$</div>
                        10
                        <div class="per-month">/mo</div>
                    </div>
                    <span class="plan-name">Basic</span>
                </div>
                <div class="divider"></div>
                <div class="feature">
                    <FontAwesomeIcon className="icon" icon={faCheck}></FontAwesomeIcon>
                      Feature A
                </div>
                <div class="feature">
                    <FontAwesomeIcon className="icon" icon={faCheck}></FontAwesomeIcon>
                    Feature B
                </div>
                <div class="feature inactive">
                   <FontAwesomeIcon className="icon" icon={faCheck}></FontAwesomeIcon>
                    Feature C
                </div>
                <div class="feature inactive">
                   <FontAwesomeIcon className="icon" icon={faCheck}></FontAwesomeIcon>
                    Feature D
                </div>
                <div class="feature inactive">
                   <FontAwesomeIcon className="icon" icon={faCheck}></FontAwesomeIcon>
                    Feature E
                </div>
                <button class="cta">Start today</button>
            </div>

            <div class="price-column popular">
                <div class="div most-popular">Most popular</div>
                <div class="price-header">
                    <div class="price-section">
                        <div class="dolar-sign">$</div>
                        10
                        <div class="per-month">/mo</div>
                    </div>
                    <div class="plan-name">Professional</div>
                </div>
                <div class="divider"></div>
                <div class="feature">
                <FontAwesomeIcon className="icon" icon={faCheck}></FontAwesomeIcon>
                    Feature A
                </div>
                <div class="feature">
                <FontAwesomeIcon className="icon" icon={faCheck}></FontAwesomeIcon>
                    Feature B
                </div>
                <div class="feature">
                <FontAwesomeIcon className="icon" icon={faCheck}></FontAwesomeIcon>
                    Feature C
                </div>
                <div class="feature">
                <FontAwesomeIcon className="icon" icon={faCheck}></FontAwesomeIcon>
                    Feature D
                </div>
                <div class="feature">
                <FontAwesomeIcon className="icon" icon={faCheck}></FontAwesomeIcon>
                    Feature E
                </div>
                <button class="cta">Start today</button>
            </div>

            <div class="price-column">
                <div class="price-header">
                    <div class="price-section">
                        <div class="dolar-sign">$</div>
                        10
                        <div class="per-month">/mo</div>
                    </div>
                    <div class="plan-name">Enterprise</div>
                </div>
                <div class="divider"></div>
                <div class="feature">
                   <FontAwesomeIcon className="icon" icon={faCheck}></FontAwesomeIcon>
                    Feature A
                </div>
                <div class="feature">
                   <FontAwesomeIcon className="icon" icon={faCheck}></FontAwesomeIcon>
                    Feature B
                </div>
                <div class="feature">
                   <FontAwesomeIcon className="icon" icon={faCheck}></FontAwesomeIcon>
                    Feature C
                </div>
                <div class="feature">
                   <FontAwesomeIcon className="icon" icon={faCheck}></FontAwesomeIcon>
                    Feature D
                </div>
                <div class="feature inactive">
                   <FontAwesomeIcon className="icon" icon={faTimes}></FontAwesomeIcon>
                    Feature E
                </div>
                <button class="cta">Start today</button>
            </div>

        </div>
    )
}

export default PriceComparision
