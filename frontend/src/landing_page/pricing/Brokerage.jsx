import React from "react";

function Brokerage() {
  return (
    <div className="container mt-5 pt-5 border-top">
      <div className="row text-center">
        <div className="col-12 col-md-6 mb-3">
          <a href="#" className="text-decoration-none fs-5">
            Brokerage calculator
          </a>
          <ul className="text-muted small lh-lg text-start mt-4">
            <li>
              Call &amp; Trade and RMS auto-squareoff: Additional charges of ₹50
              + GST per order.
            </li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged
              ₹20 per contract note. Courier charges apply.
            </li>
            <li>
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>
            <li>
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>

        <div className="col-12 col-md-6 mb-3">
          <a href="#" className="text-decoration-none fs-5">
            List of charges
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
