import { useState, useEffect } from 'react';
import './Hero.scss';

const heroImages = [
  '/src/assets/finished-pipe-transportation-by-overhead-crane-2048x1365-1-1.png',
  '/src/assets/3d-rendering-hydraulic-elements-(1)-1.png',
  '/src/assets/interior-view-steel-factory-(4)-1.png',
  '/src/assets/serious-man-protective-glasses-helmet-keeping-folder-2.png',
  '/src/assets/serious-man-protective-glasses-helmet-keeping-folder-1.png'
];

type Page = 'home' | 'capabilities' | 'products' | 'industries' | 'contact';

interface Props {
  onNavigate?: (page: Page) => void;
}

const Hero: React.FC<Props> = ({ onNavigate = () => {} }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero-root">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-inner">
          <div className="nav-logo" onClick={() => onNavigate('home')} style={{ cursor: 'pointer' }}>
            <span className="logo-box"></span>
            <span className="logo-text">Vishak Tech</span>
          </div>
          <div className="nav-center">
            <a href="#" className="nav-link active" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>Home</a>
            <a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); }}>About</a>
            <a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); onNavigate('capabilities'); }}>Capabilities</a>
            <a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); onNavigate('products'); }}>Products</a>
            <a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); onNavigate('industries'); }}>Industries</a>
          </div>
          <button className="btn-contact" onClick={() => onNavigate('contact')}>Contact us</button>
        </div>
      </nav>

      {/* Image Slider */}
      <div className="hero-slider">
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`slider-image ${index === currentImage ? 'active' : ''}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        <div className="hero-overlay"></div>
      </div>

      {/* Hero Content */}
      <div className="hero-content">
        <div className="hero-inner">
          <div className="hero-badge fade-in">
            <span className="badge-dot"></span>
            Strength in Every Component Delivered
          </div>

          <h1 className="hero-title slide-up">
            Precision Forged for<br />
            Unbreakable Performance
          </h1>

          <p className="hero-desc slide-up" style={{ animationDelay: '0.15s' }}>
            High-Performance Steels, Custom Casting &amp; Hydraulic Solutions for Cement,<br />
            Steel, Mining, and Petrochemical Leaders.
          </p>

          <div className="hero-btns slide-up" style={{ animationDelay: '0.3s' }}>
            <button className="btn-teal">Request a Quote</button>
            <button className="btn-outline">Explore Solutions</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
