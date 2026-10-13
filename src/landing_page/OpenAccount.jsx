import React from 'react';

function OpenAccount() {
    return ( 
        <div className="container p-5">
            <div className="row text-center">

                <h1 className="mt-5 fs-3 fw-medium">Open a Zerodha account</h1>
                <p className="fs-5 text-muted">Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
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

export default OpenAccount;