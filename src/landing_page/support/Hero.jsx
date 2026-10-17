import React from "react";

function Hero() {
  return (
    <section style={{ backgroundColor: "#387ED1" }} className="text-white">
      <div className="container p-5">
        
        <div className="d-flex justify-content-between">
          <h6 className="fw-normal">Support Portal</h6>
          <a href="#" className="text-white">
            Track Tickets
          </a>
        </div>

        <div className="row mt-5 pb-4">
          <div className="col-12 col-md-5">
            <h3 className="fs-4 fw-normal">
              Search for an answer or browse help topics to create a ticket
            </h3>
            <input
              type="text"
              className="form-control p-3 mt-4"
              placeholder="Eg: how do i activate F&O, why is my order getting rejected.."
            />
            <div className="mt-3">
              <a href="#" className="text-white me-3">
                Track account opening
              </a>
              <a href="#" className="text-white me-3">
                Track segment activation
              </a>
              <a href="#" className="text-white me-3">
                Intraday margins
              </a>
              <a href="#" className="text-white">
                Kite user manual
              </a>
            </div>
          </div>

          <div className="col-12 col-md-5 offset-md-1 mt-4 mt-md-0">
            <h4 className="fs-5 fw-normal">Featured</h4>
            <ol className="mt-3">
              <li>
                <a href="#" className="text-white">
                  Current Takeovers and Delisting - January 2024
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Latest Intraday leverages - MIS &amp; CO
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
