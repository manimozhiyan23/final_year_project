import React from "react";
import "./../styles/auth.css";
import BackButton from "../components/BackButton";

function WorkerLogin() {
  return (
    <div className="auth-container">

      <BackButton />

      <div className="auth-card">
        <div className="auth-icon green">👜</div>

        <h2 className="auth-title">Professional Login</h2>
        <p className="auth-sub">Sign in to manage your jobs</p>

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

        <button className="btn green-btn">Sign In</button>

        <p className="auth-footer">
          Don't have an account? <a href="/worker-signup">Sign up</a>
        </p>
      </div>
    </div>
  );
}

export default WorkerLogin;
