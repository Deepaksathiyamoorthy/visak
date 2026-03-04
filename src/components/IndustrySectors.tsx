import React from 'react';
import './IndustrySectors.scss';

const industrySectors = [
    {
        title: 'Cement Industry',
        subtitle: 'Engineered for lasting strength',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        applications: [
            'Machinery frames',
            'Equipment housings',
            'Mounting supports',
            'Brackets',
            'Custom equipment parts'
        ],
        mainImage: '/src/assets/i/agricultural-silos-building-exterior-1.png',
        iconImage: '/src/assets/i/concrete-mixer-1.png',
        imageLeft: false
    },
    {
        title: 'Steel Manufacturing',
        subtitle: 'Built to withstand extremes',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        applications: [
            'Machinery frames',
            'Equipment housings',
            'Mounting supports',
            'Brackets',
            'Custom equipment parts'
        ],
        mainImage: '/src/assets/i/mechanical-engineer-assembling-engine-1-2.png',
        iconImage: '/src/assets/i/beam-1.png',
        imageLeft: true
    },
    {
        title: 'Power & Energy',
        subtitle: 'Engineered for lasting strength',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        applications: [
            'Machinery frames',
            'Equipment housings',
            'Mounting supports',
            'Brackets',
            'Custom equipment parts'
        ],
        mainImage: '/src/assets/i/mechanical-engineer-assembling-engine-2.png',
        iconImage: '/src/assets/i/electric-factory-1.png',
        imageLeft: false
    },
    {
        title: 'Mining Industry',
        subtitle: 'Built to withstand extremes',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        applications: [
            'Machinery frames',
            'Equipment housings',
            'Mounting supports',
            'Brackets',
            'Custom equipment parts'
        ],
        mainImage: '/src/assets/i/mechanical-engineer-assembling-engine-1-3.jpeg',
        iconImage: '/src/assets/i/mining-industry-1.png',
        imageLeft: true
    }
];

const IndustrySectors: React.FC = () => {
    return (
        <section className="industry-sectors">
            <div className="ind-sectors-inner">
                {industrySectors.map((sector, idx) => (
                    <div key={idx} className={`ind-sector-row ${sector.imageLeft ? 'image-left' : 'image-right'}`}>
                        {/* Text Content Block */}
                        <div className="ind-sector-content">
                            <div className="ind-icon-box">
                                <img src={sector.iconImage} alt={`${sector.title} Icon`} />
                            </div>
                            <h2 className="ind-title">{sector.title}</h2>
                            <h3 className="ind-subtitle">{sector.subtitle}</h3>
                            <p className="ind-desc">{sector.desc}</p>
                            
                            <div className="ind-applications">
                                <span className="app-label">KEY APPLICATIONS</span>
                                <ul className="app-list">
                                    {sector.applications.map((app, i) => (
                                        <li key={i}>
                                            <div className="check-icon">
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                                </svg>
                                            </div>
                                            {app}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Image Block */}
                        <div className="ind-sector-image">
                            <img src={sector.mainImage} alt={sector.title} />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default IndustrySectors;
