import React from 'react';
import './CapabilitiesSection.scss';

interface Props {
    onViewAll?: () => void;
}

const capabilities = [
    {
        title: 'Equipment Manufacturing',
        icon: '/src/assets/c1.png',
        desc: 'Engineering strength, precision manufacturing, and customized solutions built to perform in demanding environments',
    },
    {
        title: 'Precision Casting',
        icon: '/src/assets/c2.png',
        desc: 'Engineering strength, precision manufacturing, and customized solutions built to perform in demanding environments',
    },
    {
        title: 'CNC Machining',
        icon: '/src/assets/c3.png',
        desc: 'Engineering strength, precision manufacturing, and customized solutions built to perform in demanding environments',
    },
    {
        title: 'Hydraulic Systems',
        icon: '/src/assets/c4.png',
        desc: 'Engineering strength, precision manufacturing, and customized solutions built to perform in demanding environments',
    },
    {
        title: 'R&D & Material Eng',
        icon: '/src/assets/c5.png',
        desc: 'Engineering strength, precision manufacturing, and customized solutions built to perform in demanding environments',
    },
    {
        title: 'Component Rebuild',
        icon: '/src/assets/c6.png',
        desc: 'Engineering strength, precision manufacturing, and customized solutions built to perform in demanding environments',
    },
];

const CapabilitiesSection: React.FC<Props> = ({ onViewAll }) => {
    return (
        <section className="capabilities-section">
            <div className="container">
                {/* Section Header */}
                <div className="section-header">
                    <div className="header-left">
                        <span className="section-label">CAPABILITIES</span>
                        <h2 className="section-title">Our Core<br />Capabilities</h2>
                    </div>
                    <div className="header-right">
                        <p className="header-desc">
                            Engineering strength, precision manufacturing, and customized
                            solutions built to perform in demanding environments.
                        </p>
                        <button className="view-all" onClick={onViewAll}>
                            View all &rarr;
                        </button>
                    </div>
                </div>

                {/* Capabilities Grid */}
                <div className="capabilities-grid">
                    {capabilities.map((cap, index) => (
                        <div key={index} className="capability-card" onClick={onViewAll}>
                            <div className="card-icon">
                                <img src={cap.icon} alt={cap.title} />
                            </div>
                            <h3 className="card-title">{cap.title}</h3>
                            <p className="card-desc">{cap.desc}</p>
                            <button className="learn-more">Learn more &rarr;</button>

                            {/* Faded Watermark Icon */}
                            <div className="card-watermark">
                                <img src={cap.icon} alt="" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CapabilitiesSection;
