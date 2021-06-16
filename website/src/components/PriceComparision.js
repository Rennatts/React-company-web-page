import React from 'react';
import './PriceComparision.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";


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
                    <img src="check-circle.svg"></img>
                    Feature A
                </div>
                <div class="feature">
                    <img src="check-circle.svg"></img>
                    Feature B
                </div>
                <div class="feature inactive">
                    <img src="x-square.svg"></img>
                    Feature C
                </div>
                <div class="feature inactive">
                    <img src="x-square.svg"></img>
                    Feature D
                </div>
                <div class="feature inactive">
                    <img src="x-square.svg"></img>
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
                    <img src="check-circle.svg"></img>
                    Feature A
                </div>
                <div class="feature">
                    <img src="check-circle.svg"></img>
                    Feature B
                </div>
                <div class="feature">
                    <img src="check-circle.svg"></img>
                    Feature C
                </div>
                <div class="feature">
                    <img src="check-circle.svg"></img>
                    Feature D
                </div>
                <div class="feature">
                    <img src="check-circle.svg"></img>
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
                    <img src="check-circle.svg"></img>
                    Feature A
                </div>
                <div class="feature">
                    <img src="check-circle.svg"></img>
                    Feature B
                </div>
                <div class="feature">
                    <img src="check-circle.svg"></img>
                    Feature C
                </div>
                <div class="feature">
                    <img src="check-circle.svg"></img>
                    Feature D
                </div>
                <div class="feature inactive">
                    <img src="x-square.svg"></img>
                    Feature E
                </div>
                <button class="cta">Start today</button>
            </div>

        </div>
    )
}

export default PriceComparision
