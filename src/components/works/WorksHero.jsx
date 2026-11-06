import React from 'react';

function WorksHero() {
  return (
    <div className="section-hero v1">
      <div className="hero-image">
      </div>
      <div className="container">
        <div className="content-wrap text-center">
          <div className="title text-display-2 effectFade fadeZoom">
            <span className="title1 fw-semibold text-gradient-1">Explore Our Finest</span>
            <br />
            <div className="title2 d-flex gap-20 justify-content-center flex-wrap">
              <span className="fw-semibold text-gradient-1">Our Products</span>
              <div className="title-icon">
                <div className="box"></div>
                <div className="title-icon-wrap">
                  <img src="/assets/images/item/item-13.svg" alt="" className="img-1 img-transform-3" />
                  <img src="/assets/images/item/item-14.svg" alt="" className="img-2 img-transform-3" />
                  <img src="/assets/images/item/item-15.svg" alt="" className="img-3 img-transform-3" />
                </div>
              </div>
            </div>
          </div>
          <p className="text effectFade fadeUp">
            Where innovation meets intelligence. Discover data-driven solutions, smart automation, and <br /> transformative projects shaping the future of businesses worldwide.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WorksHero;
