import "./Footer.css";
import { Link } from "react-router-dom";
import { Utensils } from "lucide-react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="footer-logo">
            <Utensils className="logo-icon" />
            <span className="logo-text">Dinior</span>
          </div>

          <p className="footer-description">
            A food magazine, a chef's stage, and a feed for everyone who eats
            with intention. Welcome to the dining issue.
          </p>
        </div>

        <div className="footer-section">
          <div className="footer-label">Sections</div>

          <ul className="footer-links">
            <li>
              <Link to="/restaurants" className="footer-link">
                Discover
              </Link>
            </li>
            <li>
              <Link to="/feed" className="footer-link">
                The Feed
              </Link>
            </li>
            <li>
              <Link to="/competitions" className="footer-link">
                Competitions
              </Link>
            </li>
            <li>
              <Link to="/submit" className="footer-link">
                Submit
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <div className="footer-label">The Masthead</div>

          <p className="footer-masthead">
            Issue 01 · 2026 · Curated by Dinior Editorial
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <span>© 2026 Dinior</span>

          <span className="footer-tagline">Eat well. Read slowly.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
