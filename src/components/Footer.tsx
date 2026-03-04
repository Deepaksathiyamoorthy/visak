import React from 'react';
import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        {/* Top Row */}
        <div className="footer-top">
          <div className="footer-address">
            Building no:3, Venkateshwara nagar,<br />
            Pavandakavundanur, kavindapadi,<br />
            Erode TN 638455
          </div>

          <div className="vertical-divider"></div>

          <div className="footer-nav">
            <a href="#" className="nav-link">Home</a>
            <a href="#" className="nav-link">About</a>
            <a href="#" className="nav-link">Capabilities</a>
            <a href="#" className="nav-link">Products</a>
            <a href="#" className="nav-link">Industries</a>
          </div>
        </div>

        {/* Horizontal Divider */}
        <div className="horizontal-divider"></div>

        {/* Bottom Row */}
        <div className="footer-bottom">
          <div className="footer-branding">
            <div className="brand-header">
              <div className="logo-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 21V9l4-3 4 3v12" />
                  <path d="M12 21V13l4-2 4 2v8" />
                  <path d="M8 6V3l8 2v8" />
                  <path d="M5 9h2" />
                  <path d="M13 13h2" />
                  <path d="M2 21h20" />
                  <path d="M10 3l-4 2" />
                </svg>
              </div>
            </div>

            <div className="brand-copy-row">
              <h2 className="brand-name">
                Vishak<br />
                Tech
              </h2>
              <p className="brand-tagline">
                Engineering strength<br />
                you can trust.
              </p>
            </div>
          </div>

          <div className="vertical-divider"></div>

          <div className="footer-illustration">
            <img
              src="/src/assets/assets/image-1.png"
              alt="Technical Illustration"
              className="illustration-img"
            />
            <div className="copyright">
              © 2025 Vishaktech.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
