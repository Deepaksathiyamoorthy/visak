import React from 'react';
import './ProductsSection.scss';

const products = [
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

interface Props {
  onViewAll?: () => void;
}

const ProductsSection: React.FC<Props> = ({ onViewAll }) => {
  return (
    <section className="products-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="header-left">
            <span className="section-label">PRODUCTS</span>
            <h2 className="section-title">Products Built<br />to Perform</h2>
          </div>
          <div className="header-right">
            <p className="header-desc">
              High-strength industrial components engineered for<br />
              durability, precision, and long service life.
            </p>
            <a href="#" className="view-all" onClick={(e) => { e.preventDefault(); onViewAll?.(); }}>View all &rarr;</a>
          </div>
        </div>

        {/* Products List */}
        <div className="products-list">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <div className="card-content">
                <span className="card-category">{product.category}</span>
                <h3 className="card-title">{product.title}</h3>
                <p className="card-desc">{product.desc}</p>

                <div className="card-divider"></div>

                <div className="applications-section">
                  <span className="app-label">KEY APPLICATIONS</span>
                  <ul className="app-list">
                    {product.applications.map((app, i) => (
                      <li key={i}>{app}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="card-image-box">
                <div className="image-inner">
                  <img src={product.image} alt={product.title} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
