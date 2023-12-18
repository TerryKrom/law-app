import React from 'react';
import './aboutContainer.css';

const AboutContainer = () => {
    return (
        <div className="row">
            <div className="col-left">
                <p className='about-us'>
                    Sobre&nbsp;<span className='highlight'>nós</span> <div className="line"></div>
                </p>
                <div className="main-text">
                    <h2>We're committed to providing</h2>
                    <h2>the best customer service</h2>
                </div>
                <p className='about-us-text'>
                    <div className="line"></div>
                    In order to meet this promise, we vow to only hire frendly, positive people that share our core values, passion for helping others and obsession with customer service.
                </p>

                <button>Explore</button>

            </div>
            <div className="col-right">
                <img src="/images/right-svg.svg" alt="" className='svg' />
            </div>
        </div>
    );
}

export default AboutContainer;