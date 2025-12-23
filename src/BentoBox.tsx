import React from "react";

const BentoBox: React.FC = () => {
  return (
    <div className="BentoBox_mck-c-bento-box__century-container__IhKkL mck-o-container">
      {/* Mobile Title Section */}
      <div className="BentoBox_mck-c-bento-box__mobile-title-container__P4IlN BentoBox_mck-c-bento-box__title-fade-in__pcEVn">
        <div>
          <div className="mck-c-bento-box__graphic-title-wrapper">
            <picture>
              <img
                alt="What’s your next brilliant move?"
                src="/~/media/mckinsey/home page/2025/september 2 2025/wynbm_svg.svg"
                loading="lazy"
              />
            </picture>
          </div>
        </div>

        <div className="mdc-c-description___SrnQP_7df6cc8 mdc-u-ts-9">
          <div>
            Game-changing work. People-powered growth. At McKinsey, we help you
            think bigger, build stronger, and expand opportunity for all.
          </div>
        </div>

        <div>
          <a
            href="/move"
            className="mdc-c-link___lBbY1_7df6cc8"
            aria-label="Bento CTA"
          >
            <span className="mdc-c-icon___oi7ef_7df6cc8 mck-link-arrow-icon" />
          </a>
        </div>
      </div>

      {/* Swiper Section */}
      <div className="swiper swiper-horizontal BentoBox_mck-c-bento-box__carousel-container__Fh93b">
        <div className="swiper-wrapper">

          {/* Slide 1 */}
          <div className="swiper-slide swiper-slide-active">
            <div className="BentoBox_mck-c-bento-box__card__lYqR7">
              <div
                className="BentoBox_mck-c-bento-box__card-bg-image__jS7Tp"
                style={{
                  backgroundImage:
                    "url('/~/media/mckinsey/home page/2025/december 15/mck_homepage_bentobox_jackson.png')",
                  backgroundPosition: "center",
                }}
              />
              <div className="BentoBox_mck-c-bento-box__card-content__e0Qu3">
                <span>CASE STUDY</span>
                <h6>
                  Resilience and growth in a mission-driven health system
                </h6>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="swiper-slide">
            <div className="BentoBox_mck-c-bento-box__card__lYqR7">
              <div
                className="BentoBox_mck-c-bento-box__card-bg-image__jS7Tp"
                style={{
                  backgroundImage:
                    "url('/~/media/mckinsey/home page/2025/december 19/mck-homepage-bentobox-ten-years-of-ai.png')",
                  backgroundPosition: "center",
                }}
              />
              <div className="BentoBox_mck-c-bento-box__card-content__e0Qu3">
                <span>BLOG POST</span>
                <h6>Ten years of AI innovation with QuantumBlack</h6>
              </div>
            </div>
          </div>

          {/* Add remaining slides the same way if needed */}

        </div>
      </div>

      {/* Subscription Section */}
      <div className="BentoBox_mck-c-bento-box__promo__kqQoc">
        <h5>
          Subscribe to the latest McKinsey Insights on the topics you care about.
        </h5>

        <form>
          <input
            type="email"
            placeholder="Email address"
            aria-label="Email address"
          />
          <button type="submit">Continue</button>
        </form>

        <p>Or continue with</p>

        <div className="flex gap-4">
          <button>Apple</button>
          <button>Google</button>
          <button>LinkedIn</button>
        </div>
      </div>
    </div>
  );
};

export default BentoBox;
