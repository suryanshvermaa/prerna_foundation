import React from 'react'

export default function Donation() {
  return (
    <section className="subscribe section">
    <div className="subscribe__container container">
      <h1 className="subscribe__title">
        Help Us Make the World A Better Place!
      </h1>
      <h1 className="subscribe__title">Join Our Hands To Save Lives!</h1>
      <p className="subscribe__description donate-text">
        Support us at the Maa Prema Foundation by donating through bank
        account and contribute to our mission to provide the masses throughout
        the Patna region with facilities and resources.
      </p>
      <button className="button subscribe__button">Donate</button>
    </div>
    <div className="popup">
      <div className="popup__close">
        <i className="bx bx-x" />
      </div>
      <div className="popup_cont">
        <h3>Bank Details for Donation</h3>
        <p>Bank Name</p>
        <div className="bar">Punjab National Bank</div>
        <p>Account Name</p>
        <div className="bar">MAA PREMA FOUNDATION</div>
        <p>Account No.</p>
        <div className="bar">8805002100000398</div>
        <p>IFSC CODE</p>
        <div className="bar">PUNB0880500</div>
        <p>Branch Name</p>
        <div className="bar">MITHAPUR, PATNA (BIHAR)</div>
      </div>
    </div>
  </section>
  )
}
