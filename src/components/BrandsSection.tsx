import React from 'react';
import './BrandsSection.scss';

const brands = [
  'logo_hennlich_schwarz-1.png',
  'bucher-hydraulics-seeklogo-1.png',
  'parker-hannifin-seeklogo-1.png',
  'olaer-logo-1.png',
  'settima-meccanica_logo_da-cliente_ridimensionato-news-1.png',
  'eaton-logo-1.png',
  'hawe_hydraulik_logo.svg-1.png',
  'rexroth_logo-1.jpeg',
  'haldex-logo.svg-1.png',
  'graco_(fluid_handling)_logo.svg-1.png',
  'images-(1)-1.png',
  'norgren-logo-1.jpeg',
  '157613580778b8cb067f3234f9248dccd5d92681a5-1.png',
  'balluff-1.png',
  '2560px-danfoss-logo.svg-2.png',
  'images-1.png',
  'herion-1.jpeg',
  'bijur-delimon-1.png',
  'brands-02-allweiler-1.png',
  'tuthill-logo-1.png',
  'images-(1)-2.png',
  'screenshot-2026-01-05-134020-1.png',
  'festo-logo.png',
  'burkert-logo.png',
  'stauff-logo.png'
];

const BrandsSection: React.FC = () => {
  return (
    <section className="brands-section">
      <div className="container">
        {/* Header Row */}
        <div className="brands-header">
          <div className="header-left">
            <span className="section-label">TRUSTED BRANDS</span>
            <h2 className="section-title">
              Brands We<br />
              Deal With
            </h2>
          </div>
          <div className="header-right">
            <p className="header-desc">
              Global hydraulic and industrial brands trusted in our solutions and<br />
              integrations our solutions.
            </p>
          </div>
        </div>

        {/* Brands Grid */}
        <div className="brands-grid-wrapper">
          <div className="brands-grid">
            {brands.map((brandInfo, index) => (
              <div key={index} className="brand-cell">
                <img
                  src={`/src/assets/assets/${brandInfo}`}
                  alt={`Brand Logo ${index + 1}`}
                  className="brand-logo"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
