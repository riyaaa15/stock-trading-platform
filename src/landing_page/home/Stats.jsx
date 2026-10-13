import React from 'react';

function Stats() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12 col-md-6 p-4">
          <h1 className="fs-3 fw-normal mb-5">Trust with confidence</h1>

          <h2 className="fs-5 fw-normal">Customer-first always</h2>
          <p className="text-muted mb-4">
            That's why 1.8+ crore customers trust Zerodha with ~ ₹9 lakh crores of equity investments, making us India's largest broker; contributing to 15% of daily retail exchange volumes in India.
          </p>

          <h2 className="fs-5 fw-normal">No spam or gimmicks</h2>
          <p className="text-muted mb-4">
            No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. <a href="#" className="text-decoration-none">Our philosophies.</a>
          </p>

          <h2 className="fs-5 fw-normal">The Zerodha universe</h2>
          <p className="text-muted mb-4">
            Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.
          </p>

          <h2 className="fs-5 fw-normal">Do better with money</h2>
          <p className="text-muted mb-4">
             With initiatives like <a  href="#" className="text-decoration-none">Nudge</a> and <a href="#" className="text-decoration-none">Kill Switch</a>, we don't just facilitate transactions, but actively help you do better with your money.
          </p>
        </div>

        <div className="col-12 col-md-6 p-4 mb-5">
          <img src="/media/images/ecosystem.png" alt="Zerodha ecosystem" className="img-fluid" />
          
          <div className="mt-4" style={{ paddingLeft: "100px" }}>
            <a href="#" className="text-decoration-none me-5">
                Explore our products <i className="fa-solid fa-arrow-right-long"></i>
           </a>
           <a href="#" className="text-decoration-none">
            Try Kite demo <i className="fa-solid fa-arrow-right-long"></i>
           </a>
           </div>

        </div>
      </div>
    </div>
  );
}

export default Stats;