import React, { useState } from 'react';
import './IndustriesSection.scss';

interface Props {
  onViewAll?: () => void;
  hideHeader?: boolean;
}

const industries = [
  {
    id: '01',
    title: 'Cement',
    desc: 'High-temperature and high-wear environments. We support: cooler grates, kiln parts, crusher wear plates, rollers.',
    image: '/src/assets/agricultural-silos-building-exterior-1.png'
  },
  {
    id: '02',
    title: 'Steel',
    desc: 'Continuous operation and heavy mechanical loads. Reliable solutions engineered to perform under extreme conditions.',
    image: '/src/assets/interior-view-steel-factory-(4)-1.png'
  },
  {
    id: '03',
    title: 'Power & Energy',
    desc: 'Reliable uptime and controlled motion systems designed for power generation facilities and energy infrastructure.',
    image: '/src/assets/mechanical-engineer-assembling-engine-2.png'
  },
  {
    id: '04',
    title: 'Mining',
    desc: 'Impact, abrasion, and harsh field conditions. Heavy-duty components built to endure the toughest environments.',
    image: '/src/assets/mechanical-engineer-assembling-engine-1-3.jpeg'
  }
];

const IndustriesSection: React.FC<Props> = ({ onViewAll, hideHeader }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="industries-section">
      <div className="container">
        {/* Header Row */}
        {!hideHeader && (
          <div className="industries-header">
            <div className="header-left">
              <span className="section-label">SECTOR EXPERTISE</span>
              <h2 className="section-title">
                Industries<br />
                we serve
              </h2>
            </div>
            <div className="header-right">
              <p className="header-desc">
                Solutions built for heat, impact, and continuous operation.Solutions<br />
                built for heat, impact, and continuous operation.
              </p>
              <a href="#" className="view-all-link" onClick={(e) => { e.preventDefault(); onViewAll?.(); }}>
                View all <span>→</span>
              </a>
            </div>
          </div>
        )}

        {/* Content Layout */}
        <div className="industries-content">
          {/* Accordion List */}
          <div className="accordion-list">
            {industries.map((industry, index) => {
              const isActive = activeTab === index;
              return (
                <div 
                  key={industry.id} 
                  className={`accordion-item ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveTab(index)}
                >
                  <div className="accordion-header">
                    <span className="acc-number">{industry.id}</span>
                    <h3 className="acc-title">{industry.title}</h3>
                  </div>
                  <div className={`accordion-body ${isActive ? 'expanded' : ''}`}>
                    <p>{industry.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Image */}
          <div className="image-wrapper rounded large-image">
            <img
              src={industries[activeTab].image}
              alt={industries[activeTab].title}
              key={industries[activeTab].image} // Force re-render for transition if needed
              className="fade-in-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
