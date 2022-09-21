import React from 'react';
import image1 from '../../images/Group 2.png';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className="logo">
                <h3>APP</h3>
            </div>
            <div className="logout-btn">
                <button type='button' className="logout"><img src={image1}/><span>Logout</span></button>
            </div>
        </div>
    );
};

export default Header;