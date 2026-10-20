import React from 'react';

function Hero() {
    return ( 
        <div className="container p-5">
            <div className="row text-center">

                <img 
                  src="/media/images/homeHero.png" 
                  alt="Hero Image" 
                  className="img-fluid mb-3 hero-img"
                />

                <h1 className="mt-5 fs-3 fw-medium">Invest in Everything</h1>
                <p className="fs-5 text-muted">Online platform to invest in stocks, IPOs, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button 
                  className="btn btn-primary hero-btn fs-5 mx-auto mt-4 p-1.8"
                  style={{width: "10%", minWidth: "200px", background: "#387ED1"}}
                >
                    Sign up for free
                </button>
            </div>

        </div>
     );
}

export default Hero;