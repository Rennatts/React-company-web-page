import React from 'react';
import './Bottom.css';
import {Link} from 'react-router-dom';


function Bottom() {
    return (
        <div className="bottom_main_container">
            <div className="icons">
                <h3>Follow us on social media</h3>
                <div className="icons_second_container">
                    <Link><i id="icone_twitter" class="fab fa-twitter"></i></Link>
                    <Link><i id="icone_instagram" class="fab fa-instagram"></i></Link>
                    <Link><i id="icone_facebook" class="fab fa-facebook-f"></i></Link>
                    <Link><i id="icone_youtube" class="fab fa-youtube"></i></Link>
                </div>
            </div>

            <div className="bottom_secondary_container">
                <div>
                    <h3>alguma coisa aqui</h3>
                </div>
            </div>
            
        </div>
    )
}

export default Bottom
