import './ClientCarousel.scss';

const clientLogos = [
  '/src/assets/1xkwhcflzwjbcqyh206fzfdjtyi1605353971513_200x200-1.png',
  '/src/assets/cima-2007-logo-png_seeklogo-30375-1.png',
  '/src/assets/heidelbergcement_2022_logo.svg-1.png',
  '/src/assets/images-(1)-3.png',
  '/src/assets/images-(2)-1.png',
  '/src/assets/images-2.png',
  '/src/assets/insee-cement-logo-png_seeklogo-408073-1.png',
  '/src/assets/logo_eurocement_eng-1.png',
  '/src/assets/sib-cement-1.png',
  '/src/assets/vicem-hai-phong-2.png',
  '/src/assets/ytl_logo-1.jpeg'
];

const ClientCarousel = () => {
  return (
    <section className="clients">
      <div className="clients-inner">
        {/* Left: counter */}
        <div className="clients-counter">
          <h2>15+</h2>
          <p>GLOBAL CLIENTELE</p>
        </div>

        {/* Divider line */}
        <div className="clients-divider"></div>

        {/* Right: scrolling logos */}
        <div className="clients-track-wrap">
          <div className="clients-track">
            {[...clientLogos, ...clientLogos].map((logo, i) => (
              <div key={i} className="logo-item">
                <img src={logo} alt={`Client ${(i % clientLogos.length) + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientCarousel;
