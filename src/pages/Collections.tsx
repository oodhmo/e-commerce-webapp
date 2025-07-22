import banner from '@/assets/images/banner.png';

const Collections = () => {
  return (
    <div id="container">
      <div id="collections">
        <div className="banner">
          <img
            style={{
              backgroundImage: `url(${banner}) center center / cover no-repeat;`,
            }}
            src={banner}
            alt="banner"
          />
        </div>
        <div id="col-content">
          <div className="intro">
            <h1>Sneakers Company Is ...</h1>
            <p>
              Step into style and comfort. Discover the latest sneakers curated
              just for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
