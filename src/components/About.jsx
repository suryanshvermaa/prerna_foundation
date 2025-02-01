import React from 'react'

export default function About() {
  return (
    <section className="about__foundation" id="about">
    <div className="container">
      <span className="section__subtitle">MAA PREMA FOUNDATION</span>
      <h2 className="section__title">
        About<span>.</span>
      </h2>
      <p className="about__text">
        The Maa Prema Foundation was born on December 5, 2017 out of the
        belief that equal opportunity is the cornerstone of civilization. All
        human beings must have the same opportunity to succeed in life. All
        Human beings must nave, the same opportunity to succeed in life,
        irrespective of the circumstances they were born into. However, this
        is far from true.
      </p>
      <p className="about__text">
        Maa Prema foundation is an organization which is active in the fields
        of women empowerment and community health related issues and is active
        in organizing awareness and health camps related to medical needs of
        the community especially underprivileged section of the society. The
        organization is all active in organizing the women empowerment
        programs so that the women can be self-dependent. The idea of this
        project is to educate the primary level children by selecting the
        eligible children from various panchayats of Bihar.
      </p>
      <div className="btn_center">
        <button
          className="button download_button"
          onclick="downloadBrochure()"
        >
          Download Brochure
        </button>
      </div>
    </div>
  </section>
  )
}
