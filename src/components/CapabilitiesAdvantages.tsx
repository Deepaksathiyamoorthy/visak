import React from 'react';
import './CapabilitiesAdvantages.scss';

const advantages = [
    {
        title: 'Industry Proven',
        desc: 'Trusted by top manufacturers',
        image: '/src/assets/i/worker-blue-construction-helmet-1-3.png',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                <polyline points="9 12 11 14 15 10"></polyline>
            </svg>
        )
    },
    {
        title: 'Customer Solution',
        desc: 'Tailored to your specs',
        image: '/src/assets/i/worker-blue-construction-helmet-1-2.png',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <path d="M12 22V12"></path>
                <path d="M12 12 2.32 7"></path>
                <path d="M3 13l4-2.31"></path>
                <path d="M12 12l9.68-5"></path>
            </svg>
        )
    },
    {
        title: 'Long Service Life',
        desc: 'Engineered for durability',
        image: '/src/assets/i/worker-blue-construction-helmet-1.png',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
                <path d="M16 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
        )
    }
];

const CapabilitiesAdvantages: React.FC = () => {
    return (
        <section className="cap-advantages">
            <div className="cap-advantages-inner">
                {advantages.map((adv, idx) => (
                    <div key={idx} className="adv-card">
                        <div className="adv-image">
                            <img src={adv.image} alt={adv.title} />
                        </div>
                        <div className="adv-content">
                            <div className="adv-icon">
                                {adv.icon}
                            </div>
                            <h3 className="adv-title">{adv.title}</h3>
                            <p className="adv-desc">{adv.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CapabilitiesAdvantages;
