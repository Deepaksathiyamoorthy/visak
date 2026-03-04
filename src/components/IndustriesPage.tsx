import React from 'react';
import IndustrySectors from './IndustrySectors';
import CapabilitiesAdvantages from './CapabilitiesAdvantages';
import ContactCtaSection from './ContactCtaSection';
import Footer from './Footer';
import './IndustriesPage.scss';

type Page = 'home' | 'capabilities' | 'products' | 'industries' | 'contact';

interface Props {
    onBack: () => void;
    onNavigate?: (page: Page) => void;
}

const IndustriesPage: React.FC<Props> = ({ onBack, onNavigate = () => {} }) => {
    return (
        <div className="ind-page">
            {/* Header / Navbar */}
            <nav className="ind-navbar">
                <div className="ind-nav-inner">
                    <div className="nav-logo" onClick={onBack} style={{ cursor: 'pointer' }}>
                        <span className="logo-box"></span>
                        <span className="logo-text">Vishak Tech</span>
                    </div>
                    <div className="nav-center">
                        <a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>Home</a>
                        <a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); onNavigate('capabilities'); }}>Capabilities</a>
                        <a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); onNavigate('products'); }}>Products</a>
                        <a href="#" className="nav-link active" onClick={(e) => { e.preventDefault(); onNavigate('industries'); }}>Industries</a>
                        <a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); }}>About</a>
                    </div>
                    <button className="btn-contact" onClick={() => onNavigate('contact')}>Contact us</button>
                </div>
            </nav>

            {/* Hero */}
            <div
                className="ind-hero"
                style={{ backgroundImage: `url('/src/assets/i/metal-workers-factory-using-automated-equipment-generated-by-ai-1.jpeg')` }}
            >
                <div className="ind-hero-overlay" />
                <div className="ind-hero-content">
                    <span className="hero-badge">
                        <span className="badge-dot"></span>
                        Sector Expertise
                    </span>
                    <h1 className="hero-title">Industries we serve</h1>
                    <p className="hero-desc">
                        We manufacture industrial equipment structures, frames, and assemblies<br />
                        designed to withstand heavy loads and continuous operation.
                    </p>
                    <button className="btn-teal">Request a Quote</button>
                </div>
            </div>

            {/* Main Industry Layout */}
            <IndustrySectors />

            {/* Advantages Cards */}
            <CapabilitiesAdvantages />

            {/* CTA & Footer */}
            <ContactCtaSection onContact={() => onNavigate('contact')} />
            <Footer />
        </div>
    );
};

export default IndustriesPage;
