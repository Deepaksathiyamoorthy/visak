import './ContactCtaSection.scss';

interface Props {
  onContact?: () => void;
}

const ContactCtaSection: React.FC<Props> = ({ onContact }) => {
  return (
    <section className="contact-cta-section">
      <div className="container">
        <div className="cta-card">
          <div className="cta-content">
            <span className="section-label">CONTACT US</span>
            <h2 className="cta-title">
              Ready to Evaluate your Production<br />
              Standard?
            </h2>
            <p className="cta-desc">
              Reach out to our team for product inquiries, technical support, or custom<br />
              manufacturing requirements. We're here to assist you with reliable<br />
              solutions and timely responses.
            </p>
            <button className="btn-teal" onClick={onContact}>
              Contact us
            </button>
          </div>
          <div className="cta-image-wrapper">
            <img
              src="/src/assets/v2/3d-industrial-machinery-illustration-of-hammer-mill-1-1.png"
              alt="Industrial Machinery"
              className="cta-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCtaSection;
