import './App.css';
function App() {

  return (
    <>
  <header className="header" id="header">
    <nav className="nav container">
      <a href="#home" className="nav__logo">
        <span> MPF</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={17}
          height={17}
          viewBox="0 0 24 24"
        >
          <path
            d="M12.74 2.32a1 1 0 0 0-1.48 0l-9 10A1 1 0 0 0 3 14h2v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7h2a1 1 0 0 0 1-1 1 1 0 0 0-.26-.68z"
            fill="#fff"
          />
        </svg>
      </a>
      <div className="nav__menu">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#home" className="nav__link active-link">
              <span>Home</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                height={17}
                viewBox="0 0 24 24"
              >
                <path
                  d="M12.71 2.29a1 1 0 0 0-1.42 0l-9 9a1 1 0 0 0 0 1.42A1 1 0 0 0 3 13h1v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7h1a1 1 0 0 0 1-1 1 1 0 0 0-.29-.71zM6 20v-9.59l6-6 6 6V20z"
                  fill="#6c7493"
                />
              </svg>
            </a>
          </li>
          <li className="nav__item">
            <a href="#about" className="nav__link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                height={17}
                viewBox="0 0 24 24"
              >
                <path
                  d="M19 2H9c-1.103 0-2 .897-2 2v5.586l-4.707 4.707A1 1 0 0 0 3 16v5a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4c0-1.103-.897-2-2-2zm-8 18H5v-5.586l3-3 3 3V20zm8 0h-6v-4a.999.999 0 0 0 .707-1.707L9 9.586V4h10v16z"
                  fill="#6c7493"
                />
                <path
                  d="M11 6h2v2h-2zm4 0h2v2h-2zm0 4.031h2V12h-2zM15 14h2v2h-2zm-8 1h2v2H7z"
                  fill="#6c7493"
                />
              </svg>
              <span>About</span>
            </a>
          </li>
          <li className="nav__item">
            <a href="#value" className="nav__link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                height={17}
                viewBox="0 0 24 24"
              >
                <path
                  d="M5,8.999c0,1.902,0.765,3.627,2,4.89V21c0,0.347,0.18,0.668,0.474,0.851c0.295,0.184,0.664,0.198,0.973,0.044L12,20.118 l3.553,1.776C15.694,21.965,15.847,22,16,22c0.183,0,0.365-0.05,0.525-0.149C16.82,21.668,17,21.347,17,21v-7.11 c1.235-1.263,2-2.988,2-4.891C19,5.14,15.86,2,12,2S5,5.14,5,8.999z M12.447,18.105c-0.281-0.141-0.613-0.141-0.895,0L9,19.382 v-4.067C9.911,15.749,10.926,16,12,16s2.089-0.25,3-0.685v4.066L12.447,18.105z M12,4c2.756,0,5,2.242,5,4.999 C17,11.757,14.757,14,12,14c-2.757,0-5-2.243-5-5.001C7,6.242,9.243,4,12,4z"
                  fill="#6c7493"
                />
              </svg>
              <span>Value</span>
            </a>
          </li>
          <li className="nav__item">
            <a href="#contact" className="nav__link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                height={17}
                viewBox="0 0 24 24"
              >
                <path
                  d="M17.707 12.293a.999.999 0 0 0-1.414 0l-1.594 1.594c-.739-.22-2.118-.72-2.992-1.594s-1.374-2.253-1.594-2.992l1.594-1.594a.999.999 0 0 0 0-1.414l-4-4a.999.999 0 0 0-1.414 0L3.581 5.005c-.38.38-.594.902-.586 1.435.023 1.424.4 6.37 4.298 10.268s8.844 4.274 10.269 4.298h.028c.528 0 1.027-.208 1.405-.586l2.712-2.712a.999.999 0 0 0 0-1.414l-4-4.001zm-.127 6.712c-1.248-.021-5.518-.356-8.873-3.712-3.366-3.366-3.692-7.651-3.712-8.874L7 4.414 9.586 7 8.293 8.293a1 1 0 0 0-.272.912c.024.115.611 2.842 2.271 4.502s4.387 2.247 4.502 2.271a.991.991 0 0 0 .912-.271L17 14.414 19.586 17l-2.006 2.005z"
                  fill="#6c7493"
                />
              </svg>
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </div>
      {/* theme change button  */}
      <i className="bx bx-moon change-theme" id="theme-button" />
      {/* <div class="nas">
          <svg class="change-theme" id="theme-button" xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 26 26">
              <path d="M20.742 13.045a8.088 8.088 0 0 1-2.077.271c-2.135 0-4.14-.83-5.646-2.336a8.025 8.025 0 0 1-2.064-7.723A1 1 0 0 0 9.73 2.034a10.014 10.014 0 0 0-4.489 2.582c-3.898 3.898-3.898 10.243 0 14.143a9.937 9.937 0 0 0 7.072 2.93 9.93 9.93 0 0 0 7.07-2.929 10.007 10.007 0 0 0 2.583-4.491 1.001 1.001 0 0 0-1.224-1.224zm-2.772 4.301a7.947 7.947 0 0 1-5.656 2.343 7.953 7.953 0 0 1-5.658-2.344c-3.118-3.119-3.118-8.195 0-11.314a7.923 7.923 0 0 1 2.06-1.483 10.027 10.027 0 0 0 2.89 7.848 9.972 9.972 0 0 0 7.848 2.891 8.036 8.036 0 0 1-1.484 2.059z" fill='#fff'/>
          </svg>
      </div> */}
      <a href="#" className="button nav__button">
        Donate
      </a>
    </nav>
  </header>
  <main>
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
    <section className="impact__container">
      <div className="container">
        <div className="impact__heading">
          <span className="section__subtitle">MAA PREMA FOUNDATION</span>
          <h2 className="section__title">
            Impact<span>.</span>
          </h2>
        </div>
        <div className="impact__grid">
          <div className="impact__item">
            <h1 className="impact__number">3120+</h1>
            <h2 className="impact__text">Charitable</h2>
          </div>
          <div className="impact__item">
            <h1 className="impact__number">1195+</h1>
            <h2 className="impact__text">Programs</h2>
          </div>
          <div className="impact__item">
            <h1 className="impact__number">23,150+</h1>
            <h2 className="impact__text">Collected Donations</h2>
          </div>
          <div className="impact__item">
            <h1 className="impact__number">17,542+</h1>
            <h2 className="impact__text">People Served</h2>
          </div>
        </div>
      </div>
    </section>
    <section className="about__foundation">
      <div className="container">
        <span className="section__subtitle">MAA PREMA FOUNDATION</span>
        <h2 className="section__title">
          What we do<span>.</span>
        </h2>
        <p className="about__text">
          Maa Prema Foundation is a giving platform that allows you to support a
          cause of your choice from the NGOs that have been evaluated for
          transparency and credibility. We tell you exactly where your money
          went and also give you proof of it through donation reports. We have
          reviewed hundreds of non - profit organizations from all over India to
          identify and list the ones that meet our Give assured criteria. We
          work for a host of causes ranging from child welfare and education,
          blood donation, and women's empowerment and many others.
        </p>
        <div className="lists">
          <div>
            <h2 className="section__title">
              Our Mission<span>.</span>
            </h2>
            <ul className="mission_vision_list">
              <li className="mission_vision_item">
                {" "}
                Evaluate the Current State of Girls' Primary Education in Bihar{" "}
              </li>
              <li className="mission_vision_item">
                {" "}
                Provide Recommendations for Improving Girls' Education.{" "}
              </li>
              <li className="mission_vision_item">
                {" "}
                Identify Factors Affecting Girls' Access to Education{" "}
              </li>
              <li className="mission_vision_item">
                {" "}
                Capture Community and Parental Perspectives{" "}
              </li>
              <li className="mission_vision_item">
                {" "}
                To improve status &amp; position of women &amp; poor in society.
              </li>
              <li className="mission_vision_item">
                {" "}
                To promote community based programs.{" "}
              </li>
              <li className="mission_vision_item">
                {" "}
                To promote the interest of people in environment and sanitation.
              </li>
            </ul>
          </div>
          <div>
            <h2 className="section__title">
              Thematic Areas<span>.</span>
            </h2>
            <ul className="mission_vision_list">
              <li className="mission_vision_item">
                {" "}
                Improving health condition of women &amp; children.{" "}
              </li>
              <li className="mission_vision_item">
                {" "}
                Protection and given shelter to children particularly missing,
                abuse and special needs children.{" "}
              </li>
              <li className="mission_vision_item">
                {" "}
                Securing Livelihood through providing skilled training to women.{" "}
              </li>
              <li className="mission_vision_item">
                {" "}
                Climate Change Adaptation and improving sanitation{" "}
              </li>
              <li className="mission_vision_item">
                {" "}
                Rights of child labour, Small, Marginal, Landless Farmers
              </li>
              <li className="mission_vision_item">
                {" "}
                Gender equality and Poverty Reduction{" "}
              </li>
              <li className="mission_vision_item"> Disaster Risk Reduction</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    {/* ==================== POPULAR ==================== */}
    <section className="popular section" id="popular">
      <div className="container">
        <span className="section__subtitle">MAA PREMA FOUNDATION</span>
        <h2 className="section__title">
          Popular Stories &amp; News <span>.</span>
        </h2>
        {/* Slider main container */}
        <div className="popular__container swiper">
          {/* Additional required wrapper */}
          <div className="swiper-wrapper">
            {/* Slides */}
            <article className="popular__card swiper-slide">
              <img src="/img/rally.jpeg" alt="aparment picture" />
              <div className="card__info">
                <h3 className="card__title">Tiranga Rally</h3>
                <p className="card__description">
                  On the occasion of Independence Day
                </p>
              </div>
            </article>
            <article className="popular__card swiper-slide">
              <img
                src="/img/popular/popular1.jpg"
                alt="aparment picture"
                width="270.93px"
                height="203px"
              />
              <div className="card__info">
                <h3 className="card__title">
                  Self Defence Training Camp for Girls
                </h3>
                <p className="card__description">
                  Bihar Mahila Ayog, 24-07-2018
                </p>
              </div>
            </article>
            <article className="popular__card swiper-slide">
              <img src="/img/self Defence.jpg" alt="aparment picture" />
              <div className="card__info">
                <h3 className="card__title">
                  Self Defence Training Camp for Girls
                </h3>
                <p className="card__description">
                  Bihar Mahila Ayog, 24-07-2018
                </p>
              </div>
            </article>
            <article className="popular__card swiper-slide">
              <img
                src="/img/popular/popular2.jpg"
                alt="aparment picture"
                width="270.93px"
                height="203px"
              />
              <div className="card__info">
                <h3 className="card__title">
                  Self Defence Training Camp for Girls
                </h3>
                <p className="card__description">
                  Bihar Mahila Ayog, 24-07-2018
                </p>
              </div>
            </article>
            <article className="popular__card swiper-slide">
              <img
                src="/img/a.jpg"
                alt="aparment picture"
                width="270.93px"
                height="203px"
              />
              <div className="card__info">
                <h3 className="card__title">
                  Self Defence Training Camp for Girls
                </h3>
                <p className="card__description">
                  Bihar Mahila Ayog, 24-07-2018
                </p>
              </div>
            </article>
            <article className="popular__card swiper-slide">
              <img
                src="/img/b.jpg"
                alt="aparment picture"
                width="270.93px"
                height="203px"
              />
              <div className="card__info">
                <h3 className="card__title">
                  Self Defence Training Camp for Girls
                </h3>
                <p className="card__description">
                  Bihar Mahila Ayog, 31-01-2018
                </p>
              </div>
            </article>
            <article className="popular__card swiper-slide">
              <img
                src="/img/c.jpg"
                alt="aparment picture"
                width="270.93px"
                height="203px"
              />
              <div className="card__info">
                <h3 className="card__title">
                  Self Defence Training Camp for Girls
                </h3>
                <p className="card__description">
                  Bihar Mahila Ayog, 27-08-2018
                </p>
              </div>
            </article>
            <article className="popular__card swiper-slide">
              <img src="/img/rally3.jpeg" alt="aparment picture" />
              <div className="card__info">
                <h3 className="card__title">Tiranga Rally</h3>
                <p className="card__description">
                  On the occasion of Independence Day, 15th August 2024
                </p>
              </div>
            </article>
            <article className="popular__card swiper-slide">
              <img
                src="/img/popular/popular3.jpg"
                alt="aparment picture"
                width="270.93px"
                height="203px"
              />
              <div className="card__info">
                <h3 className="card__title">
                  Self Defence Training Camp for Girls
                </h3>
                <p className="card__description">
                  Bihar Mahila Ayog, 24-07-2018
                </p>
              </div>
            </article>
            <article className="popular__card swiper-slide">
              <img
                src="/img/d.jpg"
                alt="aparment picture"
                width="270.93px"
                height="203px"
              />
              <div className="card__info">
                <h3 className="card__title">
                  Self Defence Training Camp for Girls
                </h3>
                <p className="card__description">
                  Bihar Mahila Ayog, 24-07-2018
                </p>
              </div>
            </article>
            <article className="popular__card swiper-slide">
              <img
                src="/img/popular/popular4.jpg"
                alt="aparment picture"
                width="270.93px"
                height="203px"
              />
              <div className="card__info">
                <h3 className="card__title">
                  Self Defence Training Camp for Girls
                </h3>
                <p className="card__description">
                  Bihar Mahila Ayog, 24-07-2018
                </p>
              </div>
            </article>
            <article className="popular__card swiper-slide">
              <img src="/img/name.jpeg" alt="aparment picture" />
              <div className="card__info">
                <h3 className="card__title">Parivartan Rally</h3>
                <p className="card__description">
                  Streat The garden City Of Miraflores, Lima - Peru Av.Sol #9876
                </p>
              </div>
            </article>
            <article className="popular__card swiper-slide">
              <img
                src="/img/popular/popular5.jpg"
                alt="aparment picture"
                width="270.93px"
                height="203px"
              />
              <div className="card__info">
                <h3 className="card__title">
                  Self Defence Training Camp for Girls
                </h3>
                <p className="card__description">
                  Bihar Mahila Ayog, 24-07-2018
                </p>
              </div>
            </article>
            <article className="popular__card swiper-slide">
              <img
                src="/img/e.jpg"
                alt="aparment picture"
                width="270.93px"
                height="203px"
              />
              <div className="card__info">
                <h3 className="card__title">
                  Self Defence Training Camp for Girls
                </h3>
                <p className="card__description">
                  Bihar Mahila Ayog, 20-03-2018
                </p>
              </div>
            </article>
            <article className="popular__card swiper-slide">
              <img
                src="/img/popular/popular6.jpg"
                alt="aparment picture"
                width="270.93px"
                height="203px"
              />
              <div className="card__info">
                <h3 className="card__title">
                  Self Defence Training Camp for Girls
                </h3>
                <p className="card__description">
                  Bihar Mahila Ayog, 24-07-2018
                </p>
              </div>
            </article>
            <article className="popular__card swiper-slide">
              <img
                src="/img/popular/popular7.jpg"
                alt="aparment picture"
                width="270.93px"
                height="203px"
              />
              <div className="card__info">
                <h3 className="card__title">
                  Self Defence Training Camp for Girls
                </h3>
                <p className="card__description">
                  Bihar Mahila Ayog, 24-07-2018
                </p>
              </div>
            </article>
            <article className="popular__card swiper-slide">
              <img
                src="/img/popular/popular8.jpg"
                alt="aparment picture"
                width="270.93px"
                height="203px"
              />
              <div className="card__info">
                <h3 className="card__title">
                  Self Defence Training Camp for Girls
                </h3>
                <p className="card__description">
                  Bihar Mahila Ayog, 24-07-2018
                </p>
              </div>
            </article>
            <article className="popular__card swiper-slide">
              <img
                src="/img/popular/popular9.jpg"
                alt="aparment picture"
                width="270.93px"
                height="203px"
              />
              <div className="card__info">
                <h3 className="card__title">
                  Self Defence Training Camp for Girls
                </h3>
                <p className="card__description">
                  Bihar Mahila Ayog, 24-07-2018
                </p>
              </div>
            </article>
            <article className="popular__card swiper-slide">
              <img
                src="/img/f.jpg"
                alt="aparment picture"
                width="270.93px"
                height="203px"
              />
              <div className="card__info">
                <h3 className="card__title">
                  Self Defence Training Camp for Girls
                </h3>
                <p className="card__description">
                  Bihar Mahila Ayog, 15-03-2018
                </p>
              </div>
            </article>
            <article className="popular__card swiper-slide">
              <img
                src="/img/popular/popular10.jpg"
                alt="aparment picture"
                width="270.93px"
                height="203px"
              />
              <div className="card__info">
                <h3 className="card__title">
                  Self Defence Training Camp for Girls
                </h3>
                <p className="card__description">
                  Bihar Mahila Ayog, 24-07-2018
                </p>
              </div>
            </article>
            <article className="popular__card swiper-slide">
              <img
                src="/img/popular/popular11.jpg"
                alt="aparment picture"
                width="270.93px"
                height="203px"
              />
              <div className="card__info">
                <h3 className="card__title">
                  Self Defence Training Camp for Girls
                </h3>
                <p className="card__description">
                  Bihar Mahila Ayog, 24-07-2018
                </p>
              </div>
            </article>
            <article className="popular__card swiper-slide">
              <img
                src="/img/popular/popular12.jpg"
                alt="aparment picture"
                width="270.93px"
                height="203px"
              />
              <div className="card__info">
                <h3 className="card__title">
                  Self Defence Training Camp for Girls
                </h3>
                <p className="card__description">
                  Bihar Mahila Ayog, 24-07-2018
                </p>
              </div>
            </article>
            <article className="popular__card swiper-slide">
              <img
                src="/img/popular/popular13.jpg"
                alt="aparment picture"
                width="270.93px"
                height="203px"
              />
              <div className="card__info">
                <h3 className="card__title">
                  Self Defence Training Camp for Girls
                </h3>
                <p className="card__description">
                  Bihar Mahila Ayog, 24-07-2018
                </p>
              </div>
            </article>
            <article className="popular__card swiper-slide">
              <img
                src="/img/g.jpg"
                alt="aparment picture"
                width="270.93px"
                height="203px"
              />
              <div className="card__info">
                <h3 className="card__title">
                  Self Defence Training Camp for Girls
                </h3>
                <p className="card__description">
                  Bihar Mahila Ayog, 12-03-2018
                </p>
              </div>
            </article>
            <article className="popular__card swiper-slide">
              <img
                src="/img/popular/popular14.jpg"
                alt="aparment picture"
                width="270.93px"
                height="203px"
              />
              <div className="card__info">
                <h3 className="card__title">
                  Self Defence Training Camp for Girls
                </h3>
                <p className="card__description">
                  Bihar Mahila Ayog, 24-07-2018
                </p>
              </div>
            </article>
            <article className="popular__card swiper-slide">
              <img
                src="/img/popular/popular15.jpg"
                alt="aparment picture"
                width="270.93px"
                height="203px"
              />
              <div className="card__info">
                <h3 className="card__title">
                  Self Defence Training Camp for Girls
                </h3>
                <p className="card__description">
                  Bihar Mahila Ayog, 24-07-2018
                </p>
              </div>
            </article>
            <article className="popular__card swiper-slide">
              <img
                src="/img/plant.jpeg"
                alt="aparment picture"
                width="270.93px"
                height="203px"
              />
              <div className="card__info">
                <h3 className="card__title">
                  Self Defence Training Camp for Girls
                </h3>
                <p className="card__description">
                  Bihar Mahila Ayog, 24-07-2018
                </p>
              </div>
            </article>
            <article className="popular__card swiper-slide">
              <img
                src="/img/popular/popular16.jpg"
                alt="aparment picture"
                width="270.93px"
                height="203px"
              />
              <div className="card__info">
                <h3 className="card__title">
                  Self Defence Training Camp for Girls
                </h3>
                <p className="card__description">
                  Bihar Mahila Ayog, 24-07-2018
                </p>
              </div>
            </article>
            <article className="popular__card swiper-slide">
              <img src="/img/class1.jpeg" alt="aparment picture" />
              <div className="card__info">
                <h3 className="card__title">Health Sewa Camp</h3>
                <p className="card__description">
                  Streat The garden City Of Miraflores, Lima - Peru Av.Sol #9876
                </p>
              </div>
            </article>
            <article className="popular__card swiper-slide">
              <img
                src="/img/popular/popular18.jpg"
                alt="aparment picture"
                width="270.93px"
                height="203px"
              />
              <div className="card__info">
                <h3 className="card__title">
                  Self Defence Training Camp for Girls
                </h3>
                <p className="card__description">
                  Bihar Mahila Ayog, 24-07-2018
                </p>
              </div>
            </article>
          </div>
          <div className="arrows">
            <div className="button-prev">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={19}
                height={19}
                viewBox="0 0 24 24"
              >
                <path
                  d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"
                  fill="#3858d6"
                />
              </svg>
            </div>
            <div className="button-next">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={19}
                height={19}
                viewBox="0 0 24 24"
              >
                <path
                  d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"
                  fill="#3858d6"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* ==================== Value ==================== */}
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
    <section className="section">
      <div className="subscribe__container container founder__container">
        <div>
          <img src="/img/founder.jpg" alt="founder" />
          <h3>Prema Kumari</h3>
          <h5>FOUNDER</h5>
        </div>
        <p className="subscribe__description donate-text founder__text">
          <q>
            The idea of Maa Prema Foundation was born very simply to bridge the
            gap between two sets of people - people who want to give, who want
            to try and make a difference along with those who are doing
            phenomenal work but don't know how to reach out to the people who
            want to support them.
          </q>
        </p>
      </div>
    </section>
    {/* ==================== Contact ==================== */}
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
    {/* ==================== Subscribe ==================== */}
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
  </main>
  {/* ==================== footer ==================== */}
  <footer className="footer section">
    <div className="footer__container container grid">
      <div>
        <a href="#home" className="footer__logo">
          MPF
          <img src="/img/bxs-home-alt-2.svg" alt="" />
        </a>
        <p className="footer__description">
          G-2, Deepleela Complex,
          <br /> Vindhyavasini Street, Kadamkuan, <br />
          PATNA, Bihar, India.
          <br /> PIN - 800003
        </p>
      </div>
      <div className="footer__content">
        <div>
          <h3 className="footer__title">About</h3>
          <ul className="footer__links">
            <li>
              <a href="#" className="footer__link">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                News &amp; Blog
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="footer__title">Company</h3>
          <ul className="footer__links">
            <li>
              <a href="#" className="footer__link">
                How We Work?
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                Capital
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                Security
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="footer__title">Support</h3>
          <ul className="footer__links">
            <li>
              <a href="#" className="footer__link">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                Support center
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="footer__title">Follow us</h3>
          <ul className="footer__social">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className="footer__social-link"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={23}
                height={23}
                viewBox="0 0 24 24"
              >
                <path
                  d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"
                  fill="#6c7493"
                />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="footer__social-link"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={23}
                height={23}
                viewBox="0 0 24 24"
              >
                <path
                  d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z"
                  fill="#6c7493"
                />
                <circle cx="11.994" cy="11.979" r="3.003" fill="#6c7493" />
              </svg>
            </a>
            <a
              href="https://www.pinterest.com/"
              target="_blank"
              className="footer__social-link"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={23}
                height={23}
                viewBox="0 0 24 24"
              >
                <path
                  d="M11.99 2C6.472 2 2 6.473 2 11.99c0 4.232 2.633 7.85 6.35 9.306-.088-.79-.166-2.006.034-2.868.182-.78 1.172-4.966 1.172-4.966s-.299-.599-.299-1.484c0-1.388.805-2.425 1.808-2.425.853 0 1.264.64 1.264 1.407 0 .858-.546 2.139-.827 3.327-.235.994.499 1.805 1.479 1.805 1.775 0 3.141-1.872 3.141-4.575 0-2.392-1.719-4.064-4.173-4.064-2.843 0-4.512 2.132-4.512 4.335 0 .858.331 1.779.744 2.28a.3.3 0 0 1 .069.286c-.076.315-.245.994-.277 1.133-.044.183-.145.222-.335.134-1.247-.581-2.027-2.405-2.027-3.871 0-3.151 2.289-6.045 6.601-6.045 3.466 0 6.159 2.469 6.159 5.77 0 3.444-2.171 6.213-5.184 6.213-1.013 0-1.964-.525-2.29-1.146l-.623 2.374c-.225.868-.834 1.956-1.241 2.62a10 10 0 0 0 2.958.445c5.517 0 9.99-4.473 9.99-9.99S17.507 2 11.99 2"
                  fill="#6c7493"
                />
              </svg>
            </a>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer__info container">
      <span className="footer__copy">
        ©&nbsp;2023 MAA PREMA FOUNDATION.&nbsp;All&nbsp;rigths&nbsp;reserved
      </span>
      <div className="footer__privacy">
        <a href="#" className="">
          Terms&nbsp;&amp;&nbsp;Agreements
        </a>
        <a href="#" className="">
          Privacy&nbsp;Policy
        </a>
      </div>
    </div>
  </footer>
  {/* ==================== scroll up ==================== */}
  <a href="#" className="scrollup" id="scroll-up">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 24 24"
    >
      <path
        d="m12 3.879-7.061 7.06 2.122 2.122L12 8.121l4.939 4.94 2.122-2.122z"
        fill="#6c7493"
      />
      <path
        d="m4.939 17.939 2.122 2.122L12 15.121l4.939 4.94 2.122-2.122L12 10.879z"
        fill="#6c7493"
      />
    </svg>
  </a>
</>

  )
}

export default App
