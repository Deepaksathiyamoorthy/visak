import { useState } from 'react';
import Hero from './components/Hero'
import ClientCarousel from './components/ClientCarousel'
import AboutSection from './components/AboutSection'
import CapabilitiesSection from './components/CapabilitiesSection'
import ProductsSection from './components/ProductsSection'
import IndustriesSection from './components/IndustriesSection'
import BrandsSection from './components/BrandsSection'
import GallerySection from './components/GallerySection'
import ContactCtaSection from './components/ContactCtaSection'
import Footer from './components/Footer'
import CapabilitiesPage from './components/CapabilitiesPage'
import ProductsPage from './components/ProductsPage'
import IndustriesPage from './components/IndustriesPage'
import ContactUsPage from './components/ContactUsPage'

type Page = 'home' | 'capabilities' | 'products' | 'industries' | 'contact';

function App() {
  const [page, setPage] = useState<Page>('home');

  // Scroll to top on page change
  const navigate = (to: Page) => {
    setPage(to);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (page === 'capabilities') {
    return <CapabilitiesPage onNavigate={navigate} />;
  }
  if (page === 'products') {
    return <ProductsPage onBack={() => navigate('home')} onNavigate={navigate} />;
  }
  if (page === 'industries') {
    return <IndustriesPage onBack={() => navigate('home')} onNavigate={navigate} />;
  }
  if (page === 'contact') {
    return <ContactUsPage onBack={() => navigate('home')} onNavigate={navigate} />;
  }

  return (
    <>
      <Hero onNavigate={navigate} />
      <ClientCarousel />
      <AboutSection />
      <CapabilitiesSection onViewAll={() => navigate('capabilities')} />
      <ProductsSection onViewAll={() => navigate('products')} />
      <IndustriesSection onViewAll={() => navigate('industries')} />
      <BrandsSection />
      <GallerySection />
      <ContactCtaSection onContact={() => navigate('contact')} />
      <Footer />
    </>
  )
}

export default App
