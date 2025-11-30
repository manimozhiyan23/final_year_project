import React from "react";
import "./../styles/auth.css";
import BackButton from "../components/BackButton";

function WorkerSignup() {
  return (
    <div className="auth-container">

      <BackButton />

      <div className="auth-card tall">

        <div className="auth-icon green">👜</div>

        <h2 className="auth-title">Join as a Professional</h2>
        <p className="auth-sub">Start earning by offering your services</p>

        <label>Full Name</label>
        <input className="auth-input" type="text" placeholder="John Smith" />

        <label>Phone Number</label>
        <div className="input-box">
          <span className="input-icon">📞</span>
          <input type="text" placeholder="+1 (555) 000-0000" />
        </div>

        <label>Profession</label>
        <select className="auth-input">
          <option>Select your profession</option>
          <option>Plumber</option>
          <option>Electrician</option>
          <option>Cleaner</option>
          <option>Carpenter</option>
        </select>

        <label>Email Address</label>
        <div className="input-box">
          <span className="input-icon">📧</span>
          <input type="email" placeholder="you@example.com" />
        </div>

        <label>Password</label>
        <div className="input-box">
          <span className="input-icon">🔒</span>
          <input type="password" placeholder="•••••••" />
          <span className="input-icon right">👁</span>
        </div>

        <div className="info-box">
          By signing up, you agree to undergo a background check and verification process.
        </div>

        <button className="btn green-btn">Create Professional Account</button>

        <p className="auth-footer">
          Already have an account? <a href="/worker-login">Sign in</a>
        </p>
      </div>
    </div>
  );
}

export default WorkerSignup;
