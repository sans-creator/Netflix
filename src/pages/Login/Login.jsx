import React, { useState } from 'react';
import './Login.css';
import logo from '../../assets/logo.png';

const Login = () => {

  const [signState,setSignState]=useState("Sign In")

  return (
    <div className="login">
      <img src={logo} alt="Logo" className="login-logo" />

      <div className="login-form">
        <h1> {signState}</h1>
        <form>
          {signState==="Sign Up"?<input type="text" placeholder="Your Name " required />:<></>}
          
          <input type="email" placeholder="Email " required />
          <input type="password" placeholder="Password" required />
          <button type="submit">{signState}</button>


          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
          
          <p>Need Help?</p>
          </div>

         </form>
         <div className="form-switch">
  {signState === "Sign Up" ? (
    <p>
      Already have an account? <span onClick={() => setSignState("Sign In")}>Sign In Now</span>
    </p>
  ) : (
    <p>
      New to Netflix? <span onClick={() => setSignState("Sign Up")}>Sign Up Now</span>
    </p>
  )}
</div>

         </div>
    </div>
  );
};

export default Login;
