import React from 'react';
import './AboutSection.scss';

const AboutSection: React.FC = () => {
  return (
    <section className="about-section">
      <div className="container">
        {/* Top Header Row */}
        <div className="about-header">
          <div className="header-left">
            <span className="section-label">ABOUT US</span>
            <h2 className="section-title">
              Strength in Every<br />
              Component Built Strong
            </h2>
          </div>
          <div className="header-right">
            <p className="header-desc">
              Delivering durable, high-performance industrial parts engineered
              for heat, impact, and continuous operation. Trusted by
              industries that demand strength and precision.
            </p>
          </div>
        </div>

        {/* Image Grid */}
        <div className="about-grid">
          <div className="grid-item">
            <div className="image-wrapper rounded">
              <img src="/src/assets/a2.jpeg" alt="Worker with thumbs up" />
            </div>
            <div className="item-content">
              <h3>Move With<br />Confidence</h3>
            </div>
          </div>

          <div className="grid-item large">
            <div className="image-wrapper rounded">
              <img src="/src/assets/a2.png" alt="Industrial furnace" />
            </div>
            <div className="item-content">
              <p>
                Vishak Tech manufactures high-performance steel and
                alloy components for heavy industries. Our products are
                engineered for durability, precision, and long service life.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="stats-bar">
          <div className="stat-item">
            <span className="stat-number">50+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">200+</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">10,000+</span>
            <span className="stat-label">Team Size</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">98%</span>
            <span className="stat-label">Client Satisfaction</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
