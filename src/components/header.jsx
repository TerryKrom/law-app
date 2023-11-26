import React from 'react';
import './header.css';
import { Link, useLocation } from 'react-router-dom';

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
                    <Link to="/">Home</Link>
                    <Link to="/search">Pesquisar</Link>
                    <Link to="/about">Sobre</Link>
                </nav>
            </header>
        </>
    );
}
 
export default Header;