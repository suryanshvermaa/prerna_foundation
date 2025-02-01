import React from 'react'

export default function ContactUs() {
  return (
    <section className="contact section" id="contact">
    <div className="contact__container container grid">
      <div className="contact__images">
        <div className="contact__orbe" />
        <div className="contact__img">
          <img src="/img/contact.jpeg" alt="" />
          <img src="/img/help.jpeg" alt="" />
        </div>
      </div>
      <div className="contact__content">
        <div className="contact__data">
          <span className="section__subtitle">Contact&nbsp;Us</span>
          <h2 className="section__title">
            Easy&nbsp;to&nbsp;Contact&nbsp;us<span>.</span>
          </h2>
          <p className="contact__description">
            Is there a problem finding your dream home? Need guide in buying
            first home? or need a consultation on residential issues? just
            contact us.
          </p>
        </div>
        <div className="contact__card">
          <div className="contact__card-box">
            <div className="contact__card-info">
              <img src="/img/bxs-phone-call.svg" alt="" />
              <div>
                <h3 className="contact__card-title">Call</h3>
                <p className="contact__card-description">+91 9431010013</p>
              </div>
            </div>
            <button className="button contact__card-button">
              <a href="tel:+919431010013">Chat Now</a>
            </button>
          </div>
          <div className="contact__card-box">
            <div className="contact__card-info">
              <img src="/img/bxs-video.svg" alt="" />
              <div>
                <h3 className="contact__card-title">Website</h3>
                <p className="contact__card-description">
                  maapremafoundation.com
                </p>
              </div>
            </div>
            <button className="button contact__card-button">
              <a href="https://www.maapremafoundation.com/">Visit Now</a>
            </button>
          </div>
          <div className="contact__card-box">
            <div className="contact__card-info">
              <img src="/img/bxs-message-rounded-dots.svg" alt="" />
              <div>
                <h3 className="contact__card-title">WhatsApp</h3>
                <p className="contact__card-description">+91 9431010013</p>
              </div>
            </div>
            <button className="button contact__card-button">
              <a href="tel:+919431010013">Chat Now</a>
            </button>
          </div>
          <div className="contact__card-box">
            <div className="contact__card-info">
              <img src="/img/bxs-envelope.svg" alt="" />
              <div>
                <h3 className="contact__card-title">Mail</h3>
                <p className="contact__card-description">
                  maapremafoundation@gmail.com
                </p>
              </div>
            </div>
            <button className="button contact__card-button">
              <a href="mailto:maapremafoundation@gmail.com">Mail us</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
