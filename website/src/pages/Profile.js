import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

function Profile() {
    const { companyId } = useParams();

    return (
        <div className="profile_main_container">
            <div className="profile_countrol">
                <div className="countrol_painel">
                    <ul>
                        <li>Messages</li>
                    </ul>
                </div>
            </div>

            <div className="profile_container">
                
            </div>
        </div>
    )
}

export default Profile
