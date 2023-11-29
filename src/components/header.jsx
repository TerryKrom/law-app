import React from 'react';
import './header.css';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    
    const location = useLocation();

    return (  
        <>
            <nav className="top-header">
                <img src="/images/brasil.png" alt="Bandeira do brasil"/>
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
            </header>
        </>
    );
}
 
export default Header;