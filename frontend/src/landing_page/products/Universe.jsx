import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1 className="fs-3 fw-normal">The Zerodha Universe</h1>
        <p className="text-muted mt-2">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-12 col-md-4  mt-5">
          <img
            src="/media/images/zerodhaFundhouse.png"
            alt="Zerodha Fund House"
            style={{ height: "40px", width: "auto" }}
          />
          <p className="small text-muted mt-4">
            Our asset management venture <br /> that is creating simple and
            transparent index <br /> funds to help you save for your goals.
          </p>
        </div>

        <div className="col-12 col-md-4  mt-5">
          <img
            src="/media/images/sensibullLogo.svg"
            alt="Sensibull"
            style={{ height: "40px", width: "auto" }}
          />
          <p className="small text-muted mt-4">
            Options trading platform that lets you <br /> create strategies,
            analyze positions, and examine <br /> data points like open
            interest, FII/DII, and more.
          </p>
        </div>

        <div className="col-12 col-md-4  mt-5">
          <img
            src="/media/images/tijori.svg"
            alt="Tijori"
            style={{ height: "40px", width: "auto" }}
          />
          <p className="small text-muted mt-4">
            Investment research platform <br /> that offers detailed insights on
            stocks, <br /> sectors, supply chains, and more.
          </p>
        </div>

        <div className="col-12 col-md-4 mt-5">
          <img
            src="/media/images/streakLogo.png"
            alt="Streak"
            style={{ height: "40px", width: "auto" }}
          />
          <p className="small text-muted mt-4">
            Systematic trading platform <br /> that allows you to create and
            backtest <br /> strategies without coding.
          </p>
        </div>

        <div className="col-12 col-md-4  mt-5">
          <img
            src="/media/images/smallcaseLogo.png"
            alt="smallcase"
            style={{ height: "40px", width: "auto" }}
          />
          <p className="small text-muted mt-4">
            Thematic investing platform <br /> that helps you invest in
            diversified <br /> baskets of stocks on ETFs.
          </p>
        </div>

        <div className="col-12 col-md-4 mt-5">
          <img
            src="/media/images/dittoLogo.png"
            alt="Ditto"
            style={{ height: "40px", width: "auto" }}
          />
          <p className="small text-muted mt-4">
            Personalized advice on life <br /> and health insurance. No spam{" "}
            <br /> and no mis-selling.
          </p>
        </div>

        <button
          className="btn btn-primary fs-5 mt-5 mb-5 mx-auto px-4 py-2 rounded-1"
          style={{ width: "20%", minWidth: "200px", background: "#387ED1" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
