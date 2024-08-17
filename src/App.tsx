import React, { useEffect, useState } from "react";
import { ReactComponent as Logo } from "./images/logo.svg";
import { ReactComponent as Pinterest } from "./images/icon-pinterest.svg";
import { ReactComponent as Facebook } from "./images/icon-facebook.svg";
import { ReactComponent as Youtube } from "./images/icon-youtube.svg";
import { ReactComponent as Instagram } from "./images/icon-instagram.svg";
import { ReactComponent as Twitter } from "./images/icon-twitter.svg";
import { ReactComponent as Hamburger } from "./images/icon-hamburger.svg";
import { ReactComponent as Close } from "./images/icon-close.svg";

function App() {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [toggle, setToggle] = useState<boolean>(false);
  const [animating, setAnimating] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleClose = () => {
    setAnimating(true);
    setTimeout(() => {
      setToggle(false);
      setAnimating(false);
    }, 300);
  };

  return (
    <div className="container">
      <header>
        {windowWidth > 845 ? (
          <>
            <div>
              <Logo />
            </div>
            <nav>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Blog</li>
                <li>Careers</li>
              </ul>
            </nav>{" "}
            <button className="req">Request Invite</button>
          </>
        ) : (
          <div className="hamburgerContainer">
            <div className="hamburger">
              <div>
                <Logo />
              </div>
              <div onClick={() => (toggle ? handleClose() : setToggle(true))}>
                {toggle ? <Close /> : <Hamburger />}
              </div>
            </div>
            {toggle && (
              <>
                <div
                  className={`overLay ${animating ? "fadeOut" : "fadeIn"}`}
                ></div>
                <nav
                  className={`hamburgerNav ${
                    animating ? "slideUp" : "slideDown"
                  }`}
                >
                  <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Blog</li>
                    <li>Careers</li>
                  </ul>
                  <button className="req">Request Invite</button>
                </nav>
              </>
            )}
          </div>
        )}
      </header>
      <main>
        <section className="sectionOne">
          <div className="content">
            <h1>Next generation digital banking</h1>
            <p>
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </p>
            <button className="req">Request Invite</button>
          </div>
          <div className="imgOne">
            {windowWidth > 845 ? (
              <>
                <img
                  src="./images/image-mockups.png"
                  alt="phone"
                  className="top"
                />
                <img
                  src="./images/bg-intro-desktop.svg"
                  alt="shape"
                  className="bottom"
                />
              </>
            ) : (
              <>
                <img
                  src="./images/image-mockups.png"
                  alt="phone"
                  className="top"
                />
                <img
                  src="./images/bg-intro-mobile.svg"
                  alt="shape"
                  className="bottomMobile"
                />
              </>
            )}
          </div>
        </section>
        <section className="sectionTwo">
          <div className="why">
            <h2>Why choose Easybank?</h2>
            <p>
              We leverage Open Banking to turn your bank account into your
              financial hub. Control your finances like never before.
            </p>
          </div>
          <ul>
            <li>
              <img src="./images/icon-online.svg" alt="online" />
              <h3>Online Banking</h3>
              <p>
                Our modern web and mobile applications allow you to keep track
                of your finances wherever you are in the world.
              </p>
            </li>
            <li>
              <img src="./images/icon-budgeting.svg" alt="budget" />
              <h3>Simple Budgeting</h3>
              <p>
                See exactly where your money goes each month. Receive
                notifications when you’re close to hitting your limits.
              </p>
            </li>
            <li>
              <img src="./images/icon-onboarding.svg" alt="onboard" />
              <h3>Fast Onboarding</h3>
              <p>
                We don’t do branches. Open your account in minutes online and
                start taking control of your finances right away.
              </p>
            </li>
            <li>
              <img src="./images/icon-api.svg" alt="api" />
              <h3>Open API</h3>
              <p>
                Manage your savings, investments, pension, and much more from
                one account. Tracking your money has never been easier.
              </p>
            </li>
          </ul>
        </section>
        <section className="sectionThree">
          <h2>Latest Articles</h2>
          <ul>
            <li>
              <img src="./images/image-currency.jpg" alt="currency" />
              <div className="content">
                <div>By Claire Robinson</div>
                <h3>Receive money in any currency with no fees</h3>
                <p>
                  The world is getting smaller and we’re becoming more mobile.
                  So why should you be forced to only receive money in a single
                  …
                </p>
              </div>
            </li>
            <li>
              <img src="./images/image-restaurant.jpg" alt="restaurant" />{" "}
              <div className="content">
                <div>By Wilson Hutton</div>
                <h3>Treat yourself without worrying about money</h3>
                <p>
                  Our simple budgeting feature allows you to separate out your
                  spending and set realistic limits each month. That means you …
                </p>
              </div>
            </li>
            <li>
              <img src="./images/image-plane.jpg" alt="plane" />
              <div className="content">
                <div>By Wilson Hutton</div>
                <h3>Take your Easybank card wherever you go</h3>
                <p>
                  We want you to enjoy your travels. This is why we don’t charge
                  any fees on purchases while you’re abroad. We’ll even show you
                  …
                </p>
              </div>
            </li>
            <li>
              <img src="./images/image-confetti.jpg" alt="confetti" />
              <div className="content">
                <div>By Claire Robinson</div>
                <h3>Our invite-only Beta accounts are now live!</h3>
                <p>
                  After a lot of hard work by the whole team, we’re excited to
                  launch our closed beta. It’s easy to request an invite through
                  the site ...
                </p>
              </div>
            </li>
          </ul>
        </section>
      </main>
      <footer>
        <section className="footerOne">
          <div className="linksAndLogo">
            <div>
              <Logo />
            </div>
            <div className="links">
              <div>
                <Facebook />
              </div>
              <div>
                <Youtube />
              </div>
              <div>
                <Twitter />
              </div>
              <div>
                <Pinterest />
              </div>
              <div>
                <Instagram />
              </div>
            </div>
          </div>
          <div className="about">
            <ul>
              <li>About Us</li>
              <li>Contact</li>
              <li>Blog</li>
            </ul>
            <ul>
              <li>Careers</li>
              <li>Support</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </section>
        <section className="footerTwo">
          <button className="req">Request Invite</button>
          <p>© Easybank. All Rights Reserved</p>
        </section>
      </footer>
    </div>
  );
}

export default App;
