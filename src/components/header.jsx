import React, { useState } from 'react';
import './header.css';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {

    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
       setIsOpen(!isOpen);
    }

    return (
        <>
            <nav className="top-header">
                <img src="/images/brasil.png" alt="Brasil" />
            </nav>

            <header>
                <div className="logo">
                    <h2 className='text-logo'>Defesa do <span className="highlight">Consumidor</span></h2>
                </div>
                <nav className='nav-links'>
                    <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
                    <Link to="/search" className={location.pathname === '/search' ? 'active' : ''}>Pesquisar</Link>
                    <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>Sobre</Link>
                </nav>
                <div className={isOpen ? 'burger open' : 'burger'} id="burger-menu" onClick={toggleMenu}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>

                <nav className={isOpen ? 'menu-hide open' : 'menu-hide'}>
                    <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
                    <Link to="/search" className={location.pathname === '/search' ? 'active' : ''}>Pesquisar</Link>
                    <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>Sobre</Link>

                </nav>
            </header>
        </>
    );
}

export default Header;