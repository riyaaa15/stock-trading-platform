import React from 'react';

function Education() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-12 col-md-6">
          <img src="/media/images/education.svg" style={{ width: "70%" }} alt="Education" />
        </div>

        <div className="col-12 col-md-6 p-4 p-md-5">
          <h1 className="mb-3 fs-4 fw-normal">Free and open market education</h1>
          <p className="lh-lg">
            Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
          </p>
          <a href="#" className="text-decoration-none">
            Varsity <i className="fa-solid fa-arrow-right-long"></i>
          </a>

          <p className=" lh-lg mb-3 mt-5">
            TradingQ&amp;A, the most active trading and investment community in India for all your market related queries.
          </p>
          <a href="#" className="text-decoration-none">
            TradingQ&amp;A <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;