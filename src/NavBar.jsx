export function NavBar() {
  return (
    <div className="nav-bar-section">
      <div className="logo">
        <img
          src="https://d1flzashw70bti.cloudfront.net/next-gen/images/zingbus-name-logo.webp"
          alt="logo.png"
          width="150px"
        />
      </div>
      <div className="nav-items">
        <div className="discount-section">
          <p>Get extra discount upto ₹500* from zingstore</p>
          <span class="material-symbols-outlined">chevron_right</span>
        </div>
        <div className="signUp-section">
          <p class="sign">Sign Up</p>
          <p>
            And <span className="sign-discount">Get ₹200 OFF</span> on first
            booking
          </p>
        </div>
      </div>
    </div>
  );
}
