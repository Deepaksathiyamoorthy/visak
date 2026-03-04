import React from 'react';
import './GallerySection.scss';

const GallerySection: React.FC = () => {
  return (
    <section className="gallery-section">
      <div className="container">
        {/* Header Row */}
        <div className="gallery-header">
          <div className="header-left">
            <span className="section-label">VISUAL INSIGHTS</span>
            <h2 className="section-title">
              Our Gallery<br />
              Highlights
            </h2>
          </div>
          <div className="header-right">
            <p className="header-desc">
              Engineering strength, precision manufacturing, and customized<br />
              solutions built to perform in demanding environments.
            </p>
          </div>
        </div>

        {/* Masonry-like Grid */}
        <div className="gallery-layout">
          {/* Top Left: 5 cols */}
          <div className="gallery-item item-top-left">
            <img
              src="/src/assets/assets/industrial-components-2.png"
              alt="Industrial components"
              className="gallery-img"
            />
          </div>

          {/* Top Middle: 3 cols (with play button) */}
          <div className="gallery-item item-top-middle">
            <img
              src="/src/assets/assets/view-male-engineer-work-engineers-day-celebration-1.jpeg"
              alt="Engineer working"
              className="gallery-img"
            />
            <div className="play-button">
              <svg viewBox="0 0 24 24" fill="currentColor" className="play-icon">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>

          {/* Top Right: 4 cols */}
          <div className="gallery-item item-top-right">
            <img
              src="/src/assets/assets/industrial-teamwork-1.png"
              alt="Industrial teamwork"
              className="gallery-img"
            />
          </div>

          {/* Bottom Left: 6 cols */}
          <div className="gallery-item item-bottom-left">
            <img
              src="/src/assets/assets/interior-view-steel-factory-(3)-1.png"
              alt="Steel factory interior"
              className="gallery-img"
            />
          </div>

          {/* Bottom Right: 6 cols */}
          <div className="gallery-item item-bottom-right">
            <img
              src="/src/assets/assets/industrial-teamwork-1.png"
              alt="Industrial operations"
              className="gallery-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
