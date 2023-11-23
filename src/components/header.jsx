import React from 'react';
import './header.css'

const Header = () => {
    return (  
        <>
            <nav className="top-header">
                <img src="/images/brasil.png" alt="Bandeira do brasil"/>
            </nav>

            <header>
                <div className="logo">
                    <img src="/images/logo.png" alt="logo" />
                    <h2 className='text-logo'>Defesa do Consumidor</h2>
                </div>
                <nav className='nav-links'>
                    <a href="#">test</a>
                    <a href="#">test</a>
                    <a href="#">test</a>
                </nav>
            </header>
        </>
    );
}
 
export default Header;