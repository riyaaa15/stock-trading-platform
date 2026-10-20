import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 p-4 p-md-5">
          <h1 className="fs-3 fw-normal">{productName}</h1>
          <p className="text-muted lh-lg">{productDescription}</p>
          <a href={learnMore} className="text-decoration-none">
            Learn more <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>

        <div className="col-12 col-md-6 p-4 p-md-5">
          <img src={imageURL} alt={productName} className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
