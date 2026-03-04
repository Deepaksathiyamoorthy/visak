import React from 'react';
import './ContactUsPage.scss';
import Footer from './Footer';

type Page = 'home' | 'capabilities' | 'products' | 'industries' | 'contact';

interface Props {
    onBack: () => void;
    onNavigate?: (page: Page) => void;
}

const ContactUsPage: React.FC<Props> = ({ onBack, onNavigate = () => {} }) => {
    return (
        <div className="contact-page">
            {/* Header / Navbar */}
            <nav className="contact-navbar">
                <div className="contact-nav-inner">
                    <div className="nav-logo" onClick={onBack} style={{ cursor: 'pointer' }}>
                        <span className="logo-box"></span>
                        <span className="logo-text">Vishak Tech</span>
                    </div>
                    <div className="nav-center">
                        <a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>Home</a>
                        <a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); onNavigate('capabilities'); }}>Capabilities</a>
                        <a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); onNavigate('products'); }}>Products</a>
                        <a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); onNavigate('industries'); }}>Industries</a>
                        <a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); }}>About</a>
                    </div>
                    {/* Action button in nav removed for Contact page specifically, per design conventions, or kept to standard */}
                    <button className="btn-contact active">Contact us</button>
                </div>
            </nav>

            {/* Hero */}
            <div
                className="contact-hero"
                style={{ backgroundImage: `url('/src/assets/cont.png')` }}
            >
                <div className="contact-hero-overlay" />
                <div className="contact-hero-content">
                    <span className="hero-badge">
                        <span className="badge-dot"></span>
                        Get In Touch
                    </span>
                    <h1 className="hero-title">Contact us</h1>
                    <p className="hero-desc">
                        We manufacture industrial equipment structures, frames, and assemblies<br />
                        designed to withstand heavy loads and continuous operation.
                    </p>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="contact-main">
                {/* Left Side: Contact Details */}
                <div className="contact-details">
                    <div className="detail-item">
                        <div className="icon-wrap">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="5" width="18" height="14" rx="2" ry="2"></rect>
                                <polyline points="3 7 12 13 21 7"></polyline>
                            </svg>
                        </div>
                        <div className="detail-text">
                            <h3>Email</h3>
                            <p className="sub">Our friendly team is here to help.</p>
                            <a href="mailto:sales@vishaktec.com" className="link">sales@vishaktec.com</a>
                        </div>
                    </div>

                    <div className="detail-item">
                        <div className="icon-wrap">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                        </div>
                        <div className="detail-text">
                            <h3>Office</h3>
                            <p className="sub">Come say hello at our office HQ.</p>
                            <p className="address">
                                Building no:3, Venkateshwara nagar,<br />
                                Pavandakavundanur, kavindapadi,<br />
                                Erode TN - 638455
                            </p>
                        </div>
                    </div>

                    <div className="detail-item">
                        <div className="icon-wrap">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                        </div>
                        <div className="detail-text">
                            <h3>Phone</h3>
                            <p className="sub">Mon-Fri from 8am to 5pm.</p>
                            <a href="tel:+919677974323" className="link">+91 9677974323 | +7 915 -115-84-11</a>
                        </div>
                    </div>

                    <div className="detail-item">
                        <div className="icon-wrap">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                <line x1="3" y1="10" x2="21" y2="10"></line>
                            </svg>
                        </div>
                        <div className="detail-text">
                            <h3>Working Hours</h3>
                            <p className="sub">Our friendly team is here to help.</p>
                            <p className="hours">
                                Mon-Fri from 9am to 5pm<br />
                                Sat from 9am to 1pm
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Side: Contact Form */}
                <div className="contact-form-wrapper">
                    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <label>Full name</label>
                            <input type="text" placeholder="Ramesh kumar" />
                        </div>
                        
                        <div className="form-group">
                            <label>Mail</label>
                            <input type="email" placeholder="Rameshkanaga@gmail.com" />
                        </div>

                        <div className="form-group">
                            <label>Phone Number</label>
                            <input type="tel" placeholder="+91 80908 09080" />
                        </div>

                        <div className="form-group">
                            <label>Message</label>
                            <textarea placeholder="Message here.." rows={4}></textarea>
                        </div>

                        <button type="submit" className="btn-submit">Send Message</button>
                    </form>
                </div>
            </div>

            {/* Map Section */}
            <div className="contact-map-section">
                <img 
                    src="/src/assets/🌎 Map Maker_ Kavandapadi, Bhavani, Erode, Tamil Nadu, India (Standard).png" 
                    alt="Map showing office location" 
                    className="map-image"
                />
            </div>

            {/* Site Footer */}
            <Footer />
        </div>
    );
};

export default ContactUsPage;
