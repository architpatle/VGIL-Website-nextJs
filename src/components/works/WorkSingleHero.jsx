import React from 'react';

function WorkSingleHero() {
  return (
    <div className="section-hero v2">
      <div className="hero-image">
      </div>
      <div className="container">
        <div className="content-wrap text-center">
          <div className="title text-display-2 effectFade fadeRotateX">
            <span className="title1 fw-semibold text-gradient-1">Catalog Intelligence</span>
            <br />
            <div className="title2 d-flex gap-20 justify-content-center flex-wrap">
              <span className="fw-semibold text-gradient-1">Engine</span>
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
            Launched a shopping copilot that interprets product attributes, boosting add-to-cart rates <br /> by 12% and enhancing the overall customer experience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WorkSingleHero;
