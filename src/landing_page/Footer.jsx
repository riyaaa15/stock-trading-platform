import React from 'react';

function Footer() {
  return (
    <footer style={{ backgroundColor: "#FBFBFB" }}>
      <div className="container border-top mt-5 pb-5">
        <div className="row mt-5">

          <div className="col-12 col-md-4 col-lg mb-4">
            <img src="/media/images/logo.svg" style={{ width: "50%" }} alt="Zerodha logo" />
            <p className="mt-3 text-muted">
              &copy; 2010 - 2026, Zerodha Broking Ltd. All rights reserved.
            </p>

            <div className="d-flex gap-4 fs-5 text-muted mt-4">
              <a href="#" className="text-reset"><i className="fa-brands fa-x-twitter"></i></a>
              <a href="#" className="text-reset"><i className="fa-brands fa-facebook"></i></a>
              <a href="#" className="text-reset"><i className="fa-brands fa-instagram"></i></a>
              <a href="#" className="text-reset"><i className="fa-brands fa-linkedin"></i></a>
            </div>

            <div className="d-flex gap-4 fs-5 text-muted mt-4 pt-3 border-top">
              <a href="#" className="text-reset"><i className="fa-brands fa-youtube"></i></a>
              <a href="#" className="text-reset"><i className="fa-brands fa-whatsapp"></i></a>
              <a href="#" className="text-reset"><i className="fa-brands fa-telegram"></i></a>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg mb-4">
            <p>Company</p>
            <a href="#" className="text-decoration-none">About</a><br />
            <a href="#" className="text-decoration-none">Philosophy</a><br />
            <a href="#" className="text-decoration-none">Press &amp; media</a><br />
            <a href="#" className="text-decoration-none">Careers</a><br />
            <a href="#" className="text-decoration-none">Zerodha Cares (CSR)</a><br />
            <a href="#" className="text-decoration-none">Zerodha.tech</a><br />
            <a href="#" className="text-decoration-none">Open source</a><br />
            <a href="#" className="text-decoration-none">Referral program</a>
          </div>

          <div className="col-6 col-md-4 col-lg mb-4">
            <p>Support</p>
            <a href="#" className="text-decoration-none">Contact us</a><br />
            <a href="#" className="text-decoration-none">Support portal</a><br />
            <a href="#" className="text-decoration-none">How to file a complaint?</a><br />
            <a href="#" className="text-decoration-none">Status of your complaints</a><br />
            <a href="#" className="text-decoration-none">Bulletin</a><br />
            <a href="#" className="text-decoration-none">Circular</a><br />
            <a href="#" className="text-decoration-none">Z-Connect blog</a><br />
            <a href="#" className="text-decoration-none">Downloads</a>
          </div>

          <div className="col-6 col-md-4 col-lg mb-4">
            <p>Account</p>
            <a href="#" className="text-decoration-none">Open demat account</a><br />
            <a href="#" className="text-decoration-none">Minor demat account</a><br />
            <a href="#" className="text-decoration-none">NRI demat account</a><br />
            <a href="#" className="text-decoration-none">HUF demat account</a><br />
            <a href="#" className="text-decoration-none">Commodity</a><br />
            <a href="#" className="text-decoration-none">Dematerialisation</a><br />
            <a href="#" className="text-decoration-none">Fund transfer</a><br />
            <a href="#" className="text-decoration-none">MTF</a>
          </div>

          <div className="col-6 col-md-4 col-lg mb-4">
            <p>Quick Links</p>
            <a href="#" className="text-decoration-none">Upcoming IPOs</a><br />
            <a href="#" className="text-decoration-none">Brokerage charges</a><br />
            <a href="#" className="text-decoration-none">Market holidays</a><br />
            <a href="#" className="text-decoration-none">Economic calendar</a><br />
            <a href="#" className="text-decoration-none">Calculators</a><br />
            <a href="#" className="text-decoration-none">Markets</a><br />
            <a href="#" className="text-decoration-none">Sectors</a><br />
            <a href="#" className="text-decoration-none">Gift Nifty</a>
          </div>

        </div>

        <div className="mt-5 text-muted" style={{ fontSize: "10px" }}>
          <p>Zerodha Broking Limited: Member of NSE, BSE, MCX &amp; MSEI – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Limited – SEBI Registration no.: IN-DP-431-2019, CIN: U65929KA2018PLC116815, Registered Address: #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>

          <p>Procedure to file a complaint on SEBI SCORES/SMARTODR: Register on SCORES portal &amp; SMARTODR. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of grievances</p>

          <p>Smart Online Dispute Resolution | Grievances Redressal Mechanism | Project Jagrook by SEBI</p>

          <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>

          <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>

          <p>India's largest broker based on networth as per NSE. NSE broker factsheet</p>

          <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers/depository participants. Receive information of your transactions directly from Exchange/Depositories on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>

          <p>*Customers availing insurance advisory services offered by Ditto (Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent (Composite) License No CA0738) will not have access to the exchange investor grievance redressal forum, SEBI SCORES/ODR, or arbitration mechanism for such products.</p>

          <p>Fixed deposit products offered on this platform are third-party products (TPP) and are not Exchange traded products. These are offered through Blostem Fintech Private Limited. Zerodha Broking Limited (SEBI Registration No.: INZ000031633) is acting solely as a distributor for these products. Any disputes arising with respect to such distribution activity will not have access to SEBI SCORES/ODR, Exchange Investor Grievance Redressal Forum, or Arbitration mechanism. Fixed deposits are regulated by the Reserve Bank of India (RBI).</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;