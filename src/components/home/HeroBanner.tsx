import banner from '@/assets/images/collection/summer.jpg';

const HeroBanner = () => {
  return (
    <section className="hero-banner">
      <div className="hero-banner__background">
        <img
          src={banner}
          alt="summer-collection"
          className="hero-banner__image"
        />
        <div className="hero-banner__overlay hero-banner__overlay--dark" />
        <div className="hero-banner__overlay hero-banner__overlay--gradient" />
      </div>

      <div className="hero-banner__content">
        <div className="hero-banner__container">
          <div className="hero-banner__title">
            SUMMER
            <span className="hero-banner__highlight">SALE</span>
          </div>
          <p className="hero-banner__subtitle">
            Up to 50% off on trending sneakers
          </p>
          <div className="hero-banner__button-wrapper">
            <button className="hero-banner__button">Explore Collection</button>
          </div>
        </div>
      </div>

      <div className="hero-banner__scroll-indicator">
        <div className="hero-banner__mouse">
          <div className="hero-banner__scroll-dot"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
