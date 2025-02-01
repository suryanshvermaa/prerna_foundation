import React from 'react'

export default function OurValue() {
  return (
    <section className="value section" id="value">
    <div className="value__container container grid">
      <div className="value__images">
        <div className="value__orbe" />
        <div className="value__img">
          <img src="/img/flag.jpeg" alt="" />
        </div>
      </div>
      <div className="value__content">
        <div className="value__data">
          <span className="section__subtitle">MAA PREMA FOUNDATION</span>
          <h2 className="section__title">
            Our Values<span>.</span>
          </h2>
          <p className="value__description">
            We always ready to help by providing the best service.
          </p>
        </div>
        <div className="value__accordion">
          <div className="value__acccordion-item">
            <header className="value__accordion-header">
              <img
                src="/img/bxs-shield-x.svg"
                alt=""
                className="value__accordion-icon"
              />
              <h3 className="value__accordion__title">Approach</h3>
              <div className="value__accrdion-arrow">
                <img src="/img/bxs-down-arrow.svg" alt="" />
              </div>
            </header>
            <div className="value__accordion-content">
              <p className="value__accordion-description">
                We must do things because they make sense to do, and not
                simply because that is how everyone else does it. Blind faith
                is the enemy of all innovation.
              </p>
            </div>
          </div>
          <div className="value__acccordion-item">
            <header className="value__accordion-header">
              <img
                src="/img/bxs-x-square.svg"
                alt=""
                className="value__accordion-icon"
              />
              <h3 className="value__accordion__title">Passion</h3>
              <div className="value__accrdion-arrow">
                <img src="/img/bxs-down-arrow.svg" alt="" />
              </div>
            </header>
            <div className="value__accordion-content">
              <p className="value__accordion-description">
                Working with a 'burning desire' to make a difference is our
                greatest motivator adding value. We will constantly improve
                ourselves through our processes and technology to provide the
                best experience to ourselves through our processes and
                technology to provide the best experience to our donors.
              </p>
            </div>
          </div>
          <div className="value__acccordion-item">
            <header className="value__accordion-header">
              <img
                src="/img/bxs-bar-chart-square.svg"
                alt=""
                className="value__accordion-icon"
              />
              <h3 className="value__accordion__title">Accountability</h3>
              <div className="value__accrdion-arrow">
                <img src="/img/bxs-down-arrow.svg" alt="" />
              </div>
            </header>
            <div className="value__accordion-content">
              <p className="value__accordion-description">
                We will be accountable for all that we do and to all our
                stakeholders.
              </p>
            </div>
          </div>
          <div className="value__acccordion-item">
            <header className="value__accordion-header">
              <img
                src="/img/bxs-check-square.svg"
                alt=""
                className="value__accordion-icon"
              />
              <h3 className="value__accordion__title">Deserve our needs</h3>
              <div className="value__accrdion-arrow">
                <img src="/img/bxs-down-arrow.svg" alt="" />
              </div>
            </header>
            <div className="value__accordion-content">
              <p className="value__accordion-description">
                We believe that we need to earn our keep, rather than assume
                it is as a right.
              </p>
            </div>
          </div>
          <div className="value__acccordion-item">
            <header className="value__accordion-header">
              <img
                src="/img/bxs-check-square.svg"
                alt=""
                className="value__accordion-icon"
              />
              <h3 className="value__accordion__title">Sacrifice</h3>
              <div className="value__accrdion-arrow">
                <img src="/img/bxs-down-arrow.svg" alt="" />
              </div>
            </header>
            <div className="value__accordion-content">
              <p className="value__accordion-description">
                We believe that every individual must demonstrate the
                willingness to share one's fortunes with those less
                privileged.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
