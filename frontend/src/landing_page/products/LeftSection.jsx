import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 p-5">
          <img src={imageURL} alt={productName} className="img-fluid" />
        </div>

        <div className="col-12 col-md-6 p-5 p-md-5">
          <h1 className="fs-3 fw-normal">{productName}</h1>
          <p className="text-muted lh-lg">{productDescription}</p>

          <div>
            <a href={tryDemo} className="text-decoration-none">
              Try demo <i className="fa-solid fa-arrow-right-long"></i>
            </a>
            <a href={learnMore} className="text-decoration-none ms-5">
              Learn more <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>

          <div className="mt-3">
            <a href={googlePlay}>
              <img
                src="/media/images/googlePlayBadge.svg"
                alt="Get it on Google Play"
              />
            </a>
            <a href={appStore}>
              <img
                src="/media/images/appstoreBadge.svg"
                alt="Download on the App Store"
                className="ms-4"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
