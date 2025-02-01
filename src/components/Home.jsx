import React from 'react'

export default function Home() {
  return (
    <section className="home section" id="home">
    <div className="home__container container grid">
      <div className="home__text">
        <h1 className="home__title">
          MAA Prema
          <br />
          Foundation
          <br />
          <span className="home__title__orange">Patna</span>
          <br />
        </h1>
        <p className="home__description">
          We are a young-blooded multifaceted organization filled with immense
          passion and a belief that everything is possible with the right
          amount of determination!
          <br />
          <br />
          Maa Prema Foundation was born on December 5, 2017 out of the belief
          that equal opportunity is the cornerstone of civilization.
        </p>
        {/* <div class="value__box">
                <div class="box">
                    <h2 class="value__title">
                        9K
                        <span>
                            +
                        </span>
                    </h2>
                    <p class="value__descrption">Premium<br>Product</p>
                </div>
                <div class="box">
                    <h2 class="value__title">
                        2K
                        <span>
                            +
                        </span>
                    </h2>
                    <p class="value__descrption">Happy<br>Customer</p>
                </div>
                <div class="box">
                    <h2 class="value__title">
                        28K
                        <span>
                            +
                        </span>
                    </h2>
                    <p class="value__descrption">Awards<br>Winning</p>
                </div>
            </div> */}
      </div>
      <div className="home__imgages">
        <div className="home__orbe" />
        <div className="home__img">
          <img src="/img/class.jpeg" alt="building img" />
        </div>
      </div>
    </div>
  </section>
  )
}
