import * as React from "react";
import "../styles/landing.css";
import netflixBackgroundImage from "../assets/banner.jpg";
import NetflixLogo from "./NetflixLogo";
import ButtonNetflix from "./ButtonNetflix";
const NetFLixMainAppNotLanding = ({ login }) => {
  const manejadorDeClickLogIn = () => {
    // comunicar componente padre login
    login?.();
    console.log("Log in!!");
  };

  return (
    <main className="landing-container">
      <section className="hero">
        <nav>
          <NetflixLogo />
          <div className="nav-menu">
            <select>
              <option>English</option>
              <option>Hindi</option>
            </select>
            <ButtonNetflix label={"Log in"} onClick={manejadorDeClickLogIn} />
          
          </div>
        </nav>
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="clr-white">Unlimited movies, TV shows and more.</h1>
            <h3 className="clr-white mt-2">Watch anywhere. Cancel anytime.</h3>
            <h4 className="clr-white mt-2">
              Ready to watch? Enter your email to create or restart your
              membership.
            </h4>
            <div className="membership mt-2">
              <input type="email" className="email-input" placeholder=" " />
              <label className="email-label">Email Address</label>
              <button className="primary-cta">
                Get Started <i className="fa fa-angle-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="t-border">
        <div className="row">
          <div className="container">
            <div className="column-2">
              <h2 className="clr-white">Enjoy on your TV.</h2>
              <p className="clr-white mt-1">
                {" "}
                Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
                Blu-ray players and more.
              </p>
            </div>
            <div className="column-2">
              <img src={netflixBackgroundImage} alt="Enjoy on your TV." />
            </div>
          </div>
        </div>
      </section>
      <section className="t-border">
        <div className="row">
          <div className="container col-reverse">
            <div className="column-2">
              <img
                src={netflixBackgroundImage}
                alt="Download your shows to watch offline."
              />
            </div>
            <div className="column-2">
              <h2 className="clr-white">
                Download your shows to watch offline.
              </h2>
              <p className="clr-white mt-1">
                Save your favourites easily and always have something to watch.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="t-border">
        <div className="row">
          <div className="container">
            <div className="column-2">
              <h2 className="clr-white">Watch everywhere.</h2>
              <p className="clr-white mt-1">
                Stream unlimited movies and TV shows on your phone, tablet,
                laptop, and TV.
              </p>
            </div>
            <div className="column-2">
              <img
                src="https://netflix-ui-clone-css.vercel.app/assets/img/img-3.png"
                alt="Watch everywhere."
              />
            </div>
          </div>
        </div>
      </section>
      <section className="t-border">
        <div className="row">
          <div className="container col-reverse">
            <div className="column-2">
              <img
                src={netflixBackgroundImage}
                alt="Create profiles for children."
              />
            </div>
            <div className="column-2">
              <h2 className="clr-white">Create profiles for children.</h2>
              <p className="clr-white mt-1">
                Send children on adventures with their favourite characters in a
                space made just for them—free with your membership.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="t-border faq-sec">
        <h2 className="clr-white txt-center mb-2">
          Frequently Asked Questions
        </h2>
        <div className="faq">
          <div className="faq-tab">
            <input id="faq-1" type="checkbox" />
            <label for="faq-1">What is Netflix?</label>
            <div className="faq-answer">
              <p>
                Netflix is a streaming service that offers a wide variety of
                award-winning TV shows, movies, anime, documentaries and more –
                on thousands of internet-connected devices.
              </p>
              <br />
              <p>
                You can watch as much as you want, whenever you want, without a
                single ad – all for one low monthly price. There's always
                something new to discover, and new TV shows and movies are added
                every week!
              </p>
            </div>
          </div>
          <div className="faq-tab">
            <input id="faq-2" type="checkbox" />
            <label for="faq-2">How much does Netflix cost?</label>
            <div className="faq-answer">
              <p>
                Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                streaming device, all for one fixed monthly fee. Plans range
                from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.
              </p>
            </div>
          </div>
          <div className="faq-tab">
            <input id="faq-3" type="checkbox" />
            <label for="faq-3">Where can I watch?</label>
            <div className="faq-answer">
              <p>
                Watch anywhere, anytime. Sign in with your Netflix account to
                watch instantly on the web at netflix.com from your personal
                computer or on any internet-connected device that offers the
                Netflix app, including smart TVs, smartphones, tablets,
                streaming media players and game consoles.
              </p>
              <p>
                You can also download your favourite shows with the iOS,
                Android, or Windows 10 app. Use downloads to watch while you're
                on the go and without an internet connection. Take Netflix with
                you anywhere.
              </p>
            </div>
          </div>
          <div className="faq-tab">
            <input id="faq-4" type="checkbox" />
            <label for="faq-4">How do I cancel?</label>
            <div className="faq-answer">
              <p>
                Netflix is flexible. There are no annoying contracts and no
                commitments. You can easily cancel your account online in two
                clicks. There are no cancellation fees – start or stop your
                account anytime.
              </p>
            </div>
          </div>
          <div className="faq-tab">
            <input id="faq-5" type="checkbox" />
            <label for="faq-5">What can I watch on Netflix?</label>
            <div className="faq-answer">
              <p>
                Netflix has an extensive library of feature films,
                documentaries, TV shows, anime, award-winning Netflix originals,
                and more. Watch as much as you want, anytime you want.
              </p>
            </div>
          </div>
          <div className="faq-tab">
            <input id="faq-6" type="checkbox" />
            <label for="faq-6">Is Netflix good for kids?</label>
            <div className="faq-answer">
              <p>
                The Netflix Kids experience is included in your membership to
                give parents control while kids enjoy family-friendly TV shows
                and films in their own space.
              </p>
              <p>
                Kids profiles come with PIN-protected parental controls that let
                you restrict the maturity rating of content kids can watch and
                block specific titles you don’t want kids to see.
              </p>
            </div>
          </div>
        </div>
        <h4 className="clr-white mt-3 txt-center">
          Ready to watch? Enter your email to create or restart your membership.
        </h4>
        <div className="membership mt-1 txt-center">
          <input type="email" className="email-input" placeholder=" " />
          <label className="email-label">Email Address</label>
          <button className="primary-cta">
            Get Started <i className="fa fa-angle-right"></i>
          </button>
        </div>
      </section>
      <section className="t-border">
        <p className="clr-white pl-1 mb-2">
          Questions? call <a href="#">000-800-919-1694</a>
        </p>
        <div className="row">
          <div className="container">
            <div className="column-3">
              <ul>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Account</a>
                </li>
                <li>
                  <a href="#">Jobs</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Only on Netflix</a>
                </li>
              </ul>
            </div>
            <div className="column-3">
              <ul>
                <li>
                  <a href="#">Gift Card Terms</a>
                </li>
                <li>
                  <a href="#">Media Centre</a>
                </li>
                <li>
                  <a href="#">Ways to Watch</a>
                </li>
                <li>
                  <a href="#">Cookie Preferences</a>
                </li>
                <li>
                  <a href="#">Speed Test</a>
                </li>
              </ul>
            </div>
            <div className="column-3">
              <ul>
                <li>
                  <a href="#">Help Centre</a>
                </li>
                <li>
                  <a href="#">Investor Relations</a>
                </li>
                <li>
                  <a href="#">Terms of Use</a>
                </li>
                <li>
                  <a href="#">Corporate Information</a>
                </li>
                <li>
                  <a href="#">Legal Notices</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <select className="ml-1" id="lang">
          <option>English</option>
          <option>Hindi</option>
        </select>
        <p className="clr-white ml-1 mt-1 copy-right">Netflix Peru</p>
      </section>
    </main>
  );
};
export default NetFLixMainAppNotLanding;
