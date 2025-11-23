import React from "react";
import "./../styles/auth.css";
import BackButton from "../components/backButton";

function CustomerLogin() {
  return (
    <div className="auth-container">

      <BackButton />

      <div className="auth-card">
        <div className="auth-icon blue">⭐</div>

        <h2 className="auth-title">Welcome Back</h2>
        <p className="auth-sub">Sign in to manage your bookings</p>

        <label>Email Address</label>
        <div className="input-box">
          <span className="input-icon">📧</span>
          <input type="email" placeholder="you@example.com" />
        </div>

        <label>Password</label>
        <div className="input-box">
          <span className="input-icon">🔒</span>
          <input type="password" placeholder="• • • • • • •" />
          <span className="input-icon right">👁</span>
        </div>

        <div className="row-between">
          <label className="remember">
            <input type="checkbox" /> Remember me
          </label>
          <a href="#" className="forgot">Forgot password?</a>
        </div>

        <button className="btn blue-btn">Sign In</button>

        <p className="auth-footer">
          Don't have an account? <a href="/worker-signup">Sign up</a>
        </p>

        <div className="divider">
          <span>Or continue with</span>
        </div>

        <div className="social-buttons">
          <button className="social google">Google</button>
          <button className="social facebook">Facebook</button>
        </div>
      </div>
    </div>
  );
}

export default CustomerLogin;
