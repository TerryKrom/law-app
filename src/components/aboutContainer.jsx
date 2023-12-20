import React from 'react';
import './aboutContainer.css';

const AboutContainer = () => {
    return (
        <div className="row">
            <div className="col-left">
                <p className='about-us'>
                    Sobre&nbsp;<span className='highlight'>nós</span> <div className="intextLine"></div>
                </p>
                <div className="main-text">
                    <h2>We're <span className='highlight'>committed</span> to providing</h2>
                    <h2>the best customer service</h2>
                </div>
                <p className='about-us-text'>
                    <div className="intextLine"></div>
                    In order to meet this promise, we vow to only hire frendly, positive people that share our core values, passion for helping others and obsession with customer service.
                </p>

                <button><a href="https://consumidor.gov.br/pages/conteudo/publico/102;acoesSessaoCookie=F91B37736AA48E28495B5912122E1DE7" target="_blank" rel="noopener noreferrer">Saiba mais</a></button>

            </div>
            <div className="col-right">
                <img src="/images/right-svg.svg" alt="" className='svg' />
            </div>
        </div>
    );
}

export default AboutContainer;