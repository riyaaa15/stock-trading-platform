import React from 'react';

function Pricing() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">


        <div className="col-12 col-md-4 p-4">
          <h4 className="fw-normal">Unbeatable pricing</h4>
          <p className="mt-4 text-muted">
            We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
          </p>
          
          <a href="#" className="text-decoration-none d-none d-md-inline">
            See pricing <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>

        <div className="col-12 col-md-8 p-4 mb-5">
          <div className="row">

            <div className="col-4 d-flex align-items-center">
              <img src="/media/images/pricingMF.svg" alt="Free account opening" className="img-fluid w-50" />
              <p className="small text-muted mb-0" style={{ fontSize: "11px" }}>Free account opening</p>
            </div>

            <div className="col-4 d-flex align-items-center">
              <img src="/media/images/pricingMF.svg" alt="Free equity delivery" className="img-fluid w-50" />
              <p className="small text-muted mb-0" style={{ fontSize: "11px" }}>Free equity delivery and direct mutual funds</p>
            </div>

            <div className="col-4 d-flex align-items-center">
              <img src="/media/images/intradayTrades.svg" alt="Intraday and F&O" className="img-fluid w-50" />
              <p className="small text-muted mb-0"style={{ fontSize: "11px" }}>Intraday and F&amp;O</p>
            </div>

          </div>

          <a href="#" className="text-decoration-none d-block d-md-none mt-3">
            See pricing <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>

      </div>
    </div>
  );
}

export default Pricing;