import "./landingpage.css";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="landing-container">
      
      {/* NAVBAR */}
      <nav className="landing-nav">
        <h1 className="logo">CanteenHub</h1>
        <div className="nav-links">
          <Link to="/login">User Login</Link>
          <Link to="/kitchen-login">Kitchen Login</Link>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-text">
          <h2>Smart Canteen, Smarter Experience</h2>
          <p>
            Order meals effortlessly, pick them up on time, and experience a 
            seamless, modern canteen system built for speed and convenience.
          </p>

          <Link to="/register" className="cta-btn">Get Started</Link>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
            alt="Canteen Food"
          />
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <h3>Why Choose CanteenHub?</h3>

        <div className="feature-grid">
          <div className="feature-box">
            <i className="icon">🍽️</i>
            <h4>Easy Ordering</h4>
            <p>Select meals quickly using a clean, intuitive menu.</p>
          </div>

          <div className="feature-box">
            <i className="icon">⏰</i>
            <h4>Pickup Scheduling</h4>
            <p>Choose your preferred pickup time and skip the waiting line.</p>
          </div>

          <div className="feature-box">
            <i className="icon">👨‍🍳</i>
            <h4>Kitchen Dashboard</h4>
            <p>Real-time order updates for efficient kitchen workflow.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2025 CanteenHub — All Rights Reserved</p>
      </footer>

    </div>
  );
}
