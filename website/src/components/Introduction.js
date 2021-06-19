import React from 'react';
import {Link} from 'react-router-dom';
import './Introduction.css';



function Introduction() {
    return (
        <div className="main_container_intro">
            <div className="container_intro">
                <div className="card" data-tilt data-tilt data-tilt-max="50" data-tilt-speed="400" data-tilt-perspective="500" data-tilt data-tilt-reset="false">
                    <div className="content">
                        <h2>01</h2>
                        <h3>Card one</h3>
                        <p>kdjewidhçwaijodedwniajewdasdncçiasndanfasçf
                            dnsldnsnfçcasjmdclkasmdçkmaclasmlgggncaçncalsçkmalc
                            kcmsmsmddsmdsmdmsdmskmdsmdksmkdmskdksmdksmdfdf
                        </p>
                        <Link className="link">See more</Link>
                    </div>
                </div>

                <div className="card">
                    <div className="content">
                        <h2>02</h2>
                        <h3>Card two</h3>
                        <p>kdjewidhçwaijodedwniajewdasdncçiasndanfasçf
                            dnsldnsnfçcasjmdclkasmdçkmaclasmlgggncaçncalsçkmalc
                            kcmsmsmddsmdsmdmsdmskmdsmdksmkdmskdksmdksmdfdf
                        </p>
                        <Link className="link">See more</Link>
                    </div>
                </div>

                <div className="card">
                    <div className="content">
                        <h2>03</h2>
                        <h3>Card three</h3>
                        <p>kdjewidhçwaijodedwniajewdasdncçiasndanfasçf
                            dnsldnsnfçcasjmdclkasmdçkmaclasmlgggncaçncalsçkmalc
                            kcmsmsmddsmdsmdmsdmskmdsmdksmkdmskdksmdksmdfdf
                        </p>
                        <Link className="link">See more</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduction;
