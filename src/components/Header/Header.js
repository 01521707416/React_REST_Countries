import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='head'>
            <h2 className=''>Welcome to Rest Countries</h2>
            <nav className='menu'>
                <a href="/home">Home</a>
                <a href="/contact">Contact</a>
                <a href="/about">About Us</a>
            </nav>
        </div>
    );
};

export default Header;