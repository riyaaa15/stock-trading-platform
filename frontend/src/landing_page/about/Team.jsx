import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row  mt- text-muted">
        <h3 className="text-center">People</h3>
      </div>
      <div className="row p-5 text-muted" style={{ lineHeight: "1.8" }}>
        <div className="col-6  p- text-center">
          <img
            src="media/images/nithinKamath.jpg"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h5 className="mt-5">Nithin Kamath</h5>
          <p>Founder, CEO</p>
        </div>
        <div className="col-6 p-3">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p> Playing basketball is his zen. </p>
          <p>
            Connect on 
            <a href="" className="text-decoration-none">
              Homepage
            </a>
             /
            <a href="" className="text-decoration-none">
              TradingQnA
            </a>
            /
            <a href="" className="text-decoration-none">
              twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
