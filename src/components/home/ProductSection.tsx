import TodaysBest from './TodaysBest';

const ProductSection = () => {
  return (
    <section className="best-section">
      <div className="best-section__container">
        <div className="best-section__header">
          <h2>Sneakers Company Is ...</h2>
          <p className="best-section__description">
            Step into style and comfort. Discover the latest sneakers curated
            just for you.
          </p>
        </div>
        <TodaysBest />
      </div>
    </section>
  );
};

export default ProductSection;
