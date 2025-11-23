import React from "react";
import "../styles/home.css";
import homeservicelogo from "../images/homeservice_logo.jpg";

function Home() {
  return (
    <div className="home-container">

      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-left">
          <img src={homeservicelogo} alt="logo" className="logo" />
          <h1 className="brand">HomeServe AI</h1>
        </div>

        <div className="navbar-right">
          <span>About</span>
          <span>Services</span>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero">
        <div className="badge">⚙ AI-Powered Matching</div>

        <h2 className="title">On-Demand Home Services</h2>
        <p className="subtitle">Made Simple</p>

        <p className="description">
          Connect with verified professionals for all your home service needs.  
          From plumbing to electrical work, cleaning to repairs – get it done right, on time.
        </p>

        {/* Cards */}
        <div className="card-container">

          <div className="card">
            <div className="icon-circle blue">👤</div>
            <h3 className="card-title">I'm a Customer</h3>
            <p className="card-text">
              Book trusted professionals for your home service needs
            </p>
            <a href="#" className="card-link">Get Started →</a>
          </div>

          <div className="card">
            <div className="icon-circle green">🧰</div>
            <h3 className="card-title">I'm a Professional</h3>
            <p className="card-text">
              Find jobs, manage bookings, and grow your business
            </p>
            <a href="#" className="card-link">Start Earning →</a>
          </div>

        </div>

        {/* Feature Section */}
        <div className="features">
          <div className="feature-box">
            <div className="icon-circle small blue">🛡</div>
            <h4>Verified Professionals</h4>
            <p>All workers are background-checked and verified</p>
          </div>

          <div className="feature-box">
            <div className="icon-circle small green">⏱</div>
            <h4>Fast Response</h4>
            <p>Get matched with available pros in minutes</p>
          </div>

          <div className="feature-box">
            <div className="icon-circle small purple">🏅</div>
            <h4>Quality Guaranteed</h4>
            <p>Satisfaction guaranteed or your money back</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;
