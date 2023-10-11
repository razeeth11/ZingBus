import { useState } from "react";

export function NavBar() {
  
const [state,setState] = useState(false)

  return (
    <>
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
          <p class="sign" onClick={()=>setState(true)}>Sign Up</p>
          <p>
            And <span className="sign-discount">Get ₹200 OFF</span> on first
            booking
          </p>
        </div>
      </div>
    </div>
    {state ? <div className="signUp-page">
    <div className="tag">
      <h1>Login</h1>
      <span class="material-symbols-outlined" onClick={()=>setState(false)}>close</span>
    </div>
    <div className="sign-comp">
      <form>
        <img
          src="https://d1flzashw70bti.cloudfront.net/original/images/india.svg"
          alt=""
        />
        <p>+91</p>
        <input type="number" placeholder="Mobile Number" />
      </form>
    </div>
  </div> : null}
    </>
  );
}
