import React from "react";

const topics = [
  {
    icon: "fa-solid fa-circle-plus",
    title: "Account Opening",
    links: [
      "Online Account Opening",
      "Offline Account Opening",
      "Company, Partnership and HUF Account Opening",
      "NRI Account Opening",
      "Charges at Zerodha",
      "Zerodha IDFC FIRST Bank 3-in-1 Account",
      "Getting Started",
    ],
  },
  {
    icon: "fa-solid fa-user",
    title: "Your Zerodha Account",
    links: [
      "Login Credentials",
      "Account Modification and Segment Addition",
      "DP ID and bank details",
      "Your Profile",
      "Transfer and conversion of shares",
    ],
  },
  {
    icon: "fa-solid fa-chart-simple",
    title: "Your Zerodha Account",
    links: [
      "Margin/leverage, Product and Order types",
      "Kite Web and Mobile",
      "Trading FAQs",
      "Corporate Actions",
      "Sentinel",
      "Kite API",
      "Pi and other platforms",
      "Stockreports+",
      "GTT",
    ],
  },
  {
    icon: "fa-solid fa-credit-card",
    title: "Funds",
    links: [
      "Adding Funds",
      "Fund Withdrawal",
      "eMandates",
      "Adding Bank Accounts",
    ],
  },
  {
    icon: "fa-solid fa-circle-notch",
    title: "Console",
    links: [
      "Reports",
      "Ledger",
      "Portfolio",
      "60 Day Challenge",
      "IPO",
      "Referral Program",
    ],
  },
  {
    icon: "fa-regular fa-circle",
    title: "Coin",
    links: [
      "Understanding Mutual Funds",
      "About Coin",
      "Buying and Selling through Coin",
      "Starting an SIP",
      "Managing your Portfolio",
      "Coin App",
      "Moving to Coin",
      "Government Securities",
    ],
  },
];

function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-3 p-md-5 mt-4 mb-5">
        <h1 className="fs-4 fw-normal mb-4">
          To create a ticket, select a relevant topic
        </h1>

        {topics.map((topic, index) => (
          <div className="col-12 col-md-4 p-4 mb-3" key={index}>
            <h4 className="fs-6 fw-normal mb-4">
              <i className={`${topic.icon} me-2`}></i>
              {topic.title}
            </h4>

            {topic.links.map((link, i) => (
              <a
                key={i}
                href="#"
                className="d-block text-decoration-none small lh-lg"
              >
                {link}
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateTicket;