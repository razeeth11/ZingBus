export function OffersDiv() {
  return (
    <>
      <div className="offers-div">
        <div className="offers">
          <h1 className="offers-head">Best Offers on Bus Booking</h1>
          <h2 className="offers-sub-head">
            Get the finest deals on bus ticket booking
          </h2>
          <hr />
          <div className="offers-image">
            <img
              src="https://d1flzashw70bti.cloudfront.net/next-gen/images/CRM/WorldCupMWebBanner.webp"
              alt=""
              width="220px"
            />
            <img
              src="https://d1flzashw70bti.cloudfront.net/next-gen/images/CRM/NewvaluebusBannerWeb.webp"
              alt=""
              width="220px"
            />
            <img
              src="https://d1flzashw70bti.cloudfront.net/next-gen/images/CRM/NewFREECANCELBannerWeb.webp"
              alt=""
              width="220px"
            />
            <img
              src="https://d1flzashw70bti.cloudfront.net/next-gen/images/CRM/NewJOINBannerWeb.webp"
              alt=""
              width="220px"
            />
          </div>
        </div>
      </div>
      <div className="all-offers">
        <h1 className="all-offers-head">Explore All Offers</h1>
        <div className="download-qr">
          <img
            src="https://d1flzashw70bti.cloudfront.net/next-gen/images/downloadTheAppBanner/icon.webp"
            alt=""
            width="180px"
          />
          <h1>Download the app to get ₹200 OFF on your first bus booking</h1>
          <img
            src="https://d1flzashw70bti.cloudfront.net/original/images/downloadTheAppBanner/qrCode.svg"
            alt=""
            width="140px"
          />
        </div>
        <button>Download Now</button>
      </div>
    </>
  );
}
