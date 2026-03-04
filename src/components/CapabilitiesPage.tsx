import React from 'react';
import './CapabilitiesPage.scss';
import Footer from './Footer';

type Page = 'home' | 'capabilities' | 'products' | 'industries' | 'contact';

interface Props {
    onNavigate?: (page: Page) => void;
}

const capabilityDetails = [
    {
        icon: '/src/assets/c1.png',
        category: 'Equipment Manufacturing',
        tagline: 'Engineered for lasting strength',
        desc: 'We manufacture industrial equipment structures, frames, and assemblies designed to withstand heavy loads and continuous operation. Our engineering teams deliver solutions built for longevity and operational reliability across demanding industrial environments.',
        applications: [
            'Machinery frames & bases',
            'Equipment housings',
            'Mounting supports',
            'Brackets',
            'Custom equipment parts',
        ],
        image: '/src/assets/v2/mechanical-engineer-assembling-engine-1.png',
    },
    {
        icon: '/src/assets/c2.png',
        category: 'Precision Casting',
        tagline: 'Built to withstand extremes',
        desc: 'We produce high-performance alloy castings engineered for heat resistance, wear resistance, and impact durability. Each component is developed to provide extended service life in the harshest industrial applications.',
        applications: [
            'Machinery frames',
            'Equipment housings',
            'Mounting supports',
            'Brackets',
            'Custom equipment parts',
        ],
        image: '/src/assets/v2/mechanical-engineer-assembling-engine-1-6.jpeg',
    },
    {
        icon: '/src/assets/c3.png',
        category: 'CNC Machining',
        tagline: 'Accuracy and efficiency in every cut',
        desc: 'Our CNC machining and fabrication services deliver metal parts with tight tolerances and high accuracy. Components ensure smooth operation, exact fitment, and dependable performance in both custom and standard applications.',
        applications: [
            'Machinery frames',
            'Equipment housings',
            'Mounting supports',
            'Brackets',
            'Custom equipment parts',
        ],
        image: '/src/assets/v2/mechanical-engineer-assembling-engine-1-2.png',
    },
    {
        icon: '/src/assets/c4.png',
        category: 'Hydraulic Systems',
        tagline: 'Powering heavy industry with fluid dynamics',
        desc: 'We manufacture high-strength hydraulic cylinders, power packs, shafts, and control systems built for durability and precision. Our components deliver reliable motion and long service life in demanding industrial environments.',
        applications: [
            'Machinery frames',
            'Equipment housings',
            'Mounting supports',
            'Brackets',
            'Custom equipment parts',
        ],
        image: '/src/assets/v2/mechanical-engineer-assembling-engine-1-5.jpeg',
    },
    {
        icon: '/src/assets/c5.png',
        category: 'R&D & Material Eng',
        tagline: 'Innovating for superior material performance',
        desc: 'Our R&D and material engineering team develops advanced alloys and composite solutions tailored to specific operational demands. We continuously innovate to improve performance characteristics and extend component life.',
        applications: [
            'Machinery frames',
            'Equipment housings',
            'Mounting supports',
            'Brackets',
            'Custom equipment parts',
        ],
        image: '/src/assets/v2/mechanical-engineer-assembling-engine-1-3.png',
    },
    {
        icon: '/src/assets/c6.png',
        category: 'Component Rebuild',
        tagline: 'Extending the life of critical assets',
        desc: 'We offer comprehensive component rebuild and refurbishment services that restore worn parts to original specification performance. Our rebuild programs significantly reduce replacement costs and equipment downtime.',
        applications: [
            'Machinery frames',
            'Equipment housings',
            'Mounting supports',
            'Brackets',
            'Custom equipment parts',
        ],
        image: '/src/assets/v2/mechanical-engineer-assembling-engine-1-4.png',
    },
];

const CapabilitiesPage: React.FC<Props> = ({ onNavigate = () => {} }) => {
    return (
        <div className="cap-page">
            {/* Header / Navbar */}
            <nav className="cap-navbar">
                <div className="cap-nav-inner">
                    <div className="nav-logo" onClick={() => onNavigate('home')} style={{ cursor: 'pointer' }}>
                        <span className="logo-box"></span>
                        <span className="logo-text">Vishak Tech</span>
                    </div>
                    <div className="nav-center">
                        <a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>Home</a>
                        <a href="#" className="nav-link active" onClick={(e) => { e.preventDefault(); onNavigate('capabilities'); }}>Capabilities</a>
                        <a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); onNavigate('products'); }}>Products</a>
                        <a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); onNavigate('industries'); }}>Industries</a>
                        <a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); }}>About</a>
                    </div>
                    <button className="btn-contact" onClick={() => onNavigate('contact')}>Contact us</button>
                </div>
            </nav>

            {/* Hero */}
            <div
                className="cap-hero"
                style={{ backgroundImage: `url('/src/assets/v2/metal-workers-factory-using-automated-equipment-generated-by-ai-1.png')` }}
            >
                <div className="cap-hero-overlay" />
                <div className="cap-hero-content">
                    <span className="hero-badge">
                        <span className="badge-dot"></span>
                        Manufacturing Excellence
                    </span>
                    <h1 className="hero-title">Our Capabilities</h1>
                    <p className="hero-desc">
                        We manufacture industrial equipment structures, frames, and assemblies
                        designed to withstand heavy loads and continuous operation.
                    </p>
                    <button className="btn-teal">Request a Quote</button>
                </div>
            </div>

            {/* Capability Detail Sections */}
            <div className="cap-details">
                {capabilityDetails.map((cap, index) => (
                    <div key={index} className={`cap-detail-row ${index % 2 !== 0 ? 'reverse' : ''}`}>
                        <div className="detail-content">
                            <div className="detail-icon">
                                <img src={cap.icon} alt={cap.category} />
                            </div>
                            <h2 className="detail-category">{cap.category}</h2>
                            <h3 className="detail-tagline">{cap.tagline}</h3>
                            <p className="detail-desc">{cap.desc}</p>

                            <div className="detail-applications">
                                <span className="app-label">KEY APPLICATIONS</span>
                                <ul className="app-list">
                                    {cap.applications.map((app, i) => (
                                        <li key={i}>
                                            <span className="check-icon">
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                    <path d="M20 6L9 17l-5-5" />
                                                </svg>
                                            </span>
                                            {app}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="detail-image">
                            <img src={cap.image} alt={cap.category} />
                        </div>
                    </div>
                ))}
            </div>

            {/* Contact CTA Card — matching main site style */}
            <div className="cap-cta-wrapper">
                <div className="cap-cta-card">
                    <div className="cap-cta-content">
                        <span className="cta-label">CONTACT US</span>
                        <h2 className="cta-title">
                            Ready to Evaluate your Production<br />
                            Standard?
                        </h2>
                        <p className="cta-desc">
                            Reach out to our team for product inquiries, technical support, or custom
                            manufacturing requirements. We're here to assist you with reliable
                            solutions and timely responses.
                        </p>
                        <button className="btn-teal" onClick={() => onNavigate('contact')}>Contact us</button>
                    </div>
                    <div className="cap-cta-image">
                        <img
                            src="/src/assets/v2/3d-industrial-machinery-illustration-of-hammer-mill-1-1.png"
                            alt="Industrial Machinery"
                        />
                    </div>
                </div>
            </div>

            {/* Site Footer */}
            <Footer />
        </div>
    );
};

export default CapabilitiesPage;
