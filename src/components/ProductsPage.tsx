import React from 'react';
import TrustedIndustries from './TrustedIndustries';
import ContactCtaSection from './ContactCtaSection';
import Footer from './Footer';
import './ProductsPage.scss';

type Page = 'home' | 'capabilities' | 'products' | 'industries' | 'contact';

interface Props {
    onBack: () => void;
    onNavigate?: (page: Page) => void;
}

const productDetails = [
    {
        category: 'HYDRAULIC COMPONENTS',
        title: 'Strength that drives performance',
        desc: 'We manufacture high-strength hydraulic cylinders, power packs, shafts, rollers, and control systems built for durability and precision. Our components deliver reliable motion and long service life in demanding industrial environments.',
        image: '/src/assets/3d-rendering-hydraulic-elements-2-4.png',
        applications: [
            'Cylinders & power packs',
            'Shafts & rollers',
            'Oil & control systems',
            'Valve blocks'
        ]
    },
    {
        category: 'EQUIPMENT MANUFACTURING',
        title: 'Engineered for lasting strength',
        desc: 'We build industrial equipment components and structures designed to endure heavy loads and continuous operation. Our assemblies ensure long-term reliability and stable performance across demanding environments.',
        image: '/src/assets/3d-rendering-hydraulic-elements-2.png',
        applications: [
            'Machinery frames & bases',
            'Equipment housings',
            'Mounting supports',
            'Mounting supports'
        ]
    },
    {
        category: 'PRECISION CASTING & ALLOY COMPONENTS',
        title: 'Built to withstand extremes',
        desc: 'We produce high-performance alloy castings that offer heat, wear, and impact resistance. Our components deliver extended service life and consistent reliability in harsh industrial applications.',
        image: '/src/assets/3d-rendering-hydraulic-elements-2-3.png',
        applications: [
            'Heat-resistant castings',
            'Wear plates & liners',
            'Crusher & kiln parts',
            'Rollers & shafts'
        ]
    },
    {
        category: 'CNC MACHINING & FABRICATION',
        title: 'Precision crafted to perfection',
        desc: 'We machine and fabricate metal parts with tight tolerances and high accuracy. Our components ensure smooth operation, exact fitment, and dependable performance in custom and standard applications.',
        image: '/src/assets/3d-rendering-hydraulic-elements-2-2.png',
        applications: [
            'Precision-machined components',
            'Shafts, bushes & gears',
            'Tight-tolerance assemblies',
            'Base plates & structures'
        ]
    }
];

const featuredSolutions = [
    {
        badge: 'TOP SELLER',
        title: 'High Torque Gear Assembly',
        desc: 'Engineering strength, precision manufacturing, and customized solutions built to perform environments',
        image: '/src/assets/v2/2.png'
    },
    {
        badge: 'TOP SELLER',
        title: 'Severe Service Valve Kit',
        desc: 'Engineering strength, precision manufacturing, and customized solutions built to perform environments',
        image: '/src/assets/v2/3.png'
    },
    {
        badge: 'NEW ARRIVAL',
        title: 'High Torque Gear Assembly',
        desc: 'Engineering strength, precision manufacturing, and customized solutions built to perform environments',
        image: '/src/assets/v2/4.png'
    }
];

const ProductsPage: React.FC<Props> = ({ onBack, onNavigate = () => {} }) => {
    return (
        <div className="prod-page">
            {/* Header / Navbar */}
            <nav className="prod-navbar">
                <div className="prod-nav-inner">
                    <div className="nav-logo" onClick={onBack} style={{ cursor: 'pointer' }}>
                        <span className="logo-box"></span>
                        <span className="logo-text">Vishak Tech</span>
                    </div>
                    <div className="nav-center">
                        <a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>Home</a>
                        <a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); onNavigate('capabilities'); }}>Capabilities</a>
                        <a href="#" className="nav-link active" onClick={(e) => { e.preventDefault(); onNavigate('products'); }}>Products</a>
                        <a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); onNavigate('industries'); }}>Industries</a>
                        <a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); }}>About</a>
                    </div>
                    <button className="btn-contact" onClick={() => onNavigate('contact')}>Contact us</button>
                </div>
            </nav>

            {/* Hero */}
            <div
                className="prod-hero"
                style={{ backgroundImage: `url('/src/assets/v2/1.png')` }}
            >
                <div className="prod-hero-overlay" />
                <div className="prod-hero-content">
                    <span className="hero-badge">
                        <span className="badge-dot"></span>
                        Our Products
                    </span>
                    <h1 className="hero-title">Products Built to Perform</h1>
                    <p className="hero-desc">
                        We manufacture industrial equipment structures, frames, and assemblies 
                        designed to withstand heavy loads and continuous operation.
                    </p>
                    <button className="btn-teal">Request a Quote</button>
                </div>
            </div>

            {/* Product Detail Sections */}
            <div className="prod-details">
                <div className="prod-details-inner">
                    {productDetails.map((prod, index) => (
                        <div key={index} className="prod-card-row">
                            <div className="prod-card-content">
                                <span className="prod-category">{prod.category}</span>
                                <h2 className="prod-title">{prod.title}</h2>
                                <p className="prod-desc">{prod.desc}</p>
                                
                                <div className="prod-divider"></div>

                                <div className="prod-applications">
                                    <span className="app-label">KEY APPLICATIONS</span>
                                    <ul className="app-list">
                                        {prod.applications.map((app, i) => (
                                            <li key={i}>
                                                <span className="list-dot"></span>
                                                {app}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="prod-card-image">
                                <img src={prod.image} alt={prod.title} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Featured Solutions */}
            <div className="prod-featured">
                <div className="feat-inner">
                    <div className="feat-header">
                        <div className="feat-left">
                            <span className="feat-label">SOLUTIONS</span>
                            <h2 className="feat-title">Featured<br />Solutions</h2>
                        </div>
                        <div className="feat-right">
                            <p className="feat-desc">
                                Engineering strength, precision manufacturing, and customized<br />
                                solutions built to perform in demanding environments.
                            </p>
                            <a href="#" className="feat-link">Request a Quote &rarr;</a>
                        </div>
                    </div>

                    <div className="feat-grid">
                        {featuredSolutions.map((feat, index) => (
                            <div key={index} className="feat-card">
                                <div className="feat-image-wrap">
                                    <img src={feat.image} alt={feat.title} />
                                </div>
                                <div className="feat-content">
                                    <span className="feat-badge">{feat.badge}</span>
                                    <h3 className="feat-card-title">{feat.title}</h3>
                                    <p className="feat-card-desc">{feat.desc}</p>
                                    <a href="#" className="feat-card-link">Request a Quote &rarr;</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Trusted Industries */}
            <TrustedIndustries />

            <div className="products-footer-wrap">
                <ContactCtaSection onContact={() => onNavigate('contact')} />
                <Footer />
            </div>
        </div>
    );
};

export default ProductsPage;
