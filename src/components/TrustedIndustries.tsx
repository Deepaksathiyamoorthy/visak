import React from 'react';
import './TrustedIndustries.scss';

const industries = [
    {
        name: 'Cement',
        image: '/src/assets/p/dusk-over-emerging-metropolis-1.png'
    },
    {
        name: 'Steel',
        image: '/src/assets/p/dusk-over-emerging-metropolis-1-2.png'
    },
    {
        name: 'Power & Energy',
        image: '/src/assets/p/dusk-over-emerging-metropolis-1-3.png'
    },
    {
        name: 'Mining',
        image: '/src/assets/p/dusk-over-emerging-metropolis-1-4.png'
    },
    {
        name: 'Petrochemical',
        image: '/src/assets/p/dusk-over-emerging-metropolis-1-6.jpeg'
    }
];

const TrustedIndustries: React.FC = () => {
    // Duplicate the array to create a seamless infinite scroll effect
    const scrollItems = [...industries, ...industries];

    return (
        <section className="trusted-industries">
            <div className="trusted-header-container">
                <div className="trusted-header">
                    <h2 className="trusted-title">
                        Trusted By<br />
                        Heavy Industries
                    </h2>
                    <p className="trusted-desc">
                        Engineering strength, precision manufacturing, and customized<br />
                        solutions built to perform in demanding environments.
                    </p>
                </div>
            </div>

            <div className="trusted-carousel-wrapper">
                <div className="trusted-carousel-track">
                    {scrollItems.map((ind, index) => (
                        <div key={index} className="trusted-card">
                            <img src={ind.image} alt={ind.name} className="trusted-card-img" />
                            <div className="trusted-card-overlay"></div>
                            <span className="trusted-card-label">{ind.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustedIndustries;
