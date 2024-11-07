// import { useState } from 'react'
import NavBar from "../../components/navBar/navBar";
import LanCards from "../../components/cardsType/landingCards";

import "./landing.css";

function LandingPage() {
  return (
    <div className="landing-page">
      <section>
        <div className="container-1">
          <NavBar />
          <div className="texts-div">
            <h1 className="CTA">Make the difference</h1>
            <p className="paragraph">
              You can adopt pets, report lost or stray animals, access veterinary services, and shop for pet care products. Find your new friend, help reunite pets with their owners, schedule veterinary appointments and discover offers in our store.
            </p>
            <p className="bold-text">Join us and make a difference today!</p>

          </div>
        </div>

        <img className="dog-img" src="./src/img/big-dog.png" />
        <img className="crown-img" src="./src/img/Crown.png" />
        <img className="stars-img" src="./src/img/stars.png" />
      </section>

      <div className="cards-111">
        <LanCards />
      </div>

      <div className="section-2">
        <div className="about-pawtner">
          <img className="cat-big" src="./src/img/cat-doodles.png" />

          <div className="text-content">
            <h1 className="title-2">Pawtner</h1>
            <p className="info-text1">
              Pawtner is dedicated to making a meaningful difference in the lives of pets and their families. We connect animals in need with loving homes, provide essential resources for their care and well-being, and offer easy access to veterinary services. Our goal is to create a supportive community that promotes adoption, rescue, and responsible pet ownership.
            </p>
          </div>
        </div>
      </div>

      <section className="mission">
        <div className="text-mission">
          <h2>About</h2>
          <h1 className="white_outline">Our mission</h1>
          <p className="mission-text">
            Our mission is to connect pets in need with loving homes, provide resources for their care and well-being, and facilitate access to services that improve the lives of animals and their families. We are committed to creating a caring community that promotes adoption, rescue and responsible pet care.
          </p>
        </div>
        <img className="about-perro" src="./src/img/about-perro.png" />
        <img className="about-highlight" src="./src/img/Highlight.png" />
      </section>

      <div className="section-3">
        <img className="star2-img" src="./src/img/star2.png" />
        <h2 className="title-4">Meet a</h2>
        <h1 className="title-4">new friend!</h1>

        <div className="animal-cards">
          <img className="animal-img" src="./src/img/c1.png" />
          <img className="animal-img" src="./src/img/c2.png" />
          <img className="animal-img" src="./src/img/c3.png" />
        </div>
      </div>

      <section className="adopt">
        <img className="adopt-puppy" src="./src/img/adopt-puppy.png" />
        <div className="adopt-text">
          <h1 className="title-4">Adopt</h1>
          <p className="info-text1">
            Our mission is to connect pets in need with loving homes, provide resources for their care and well-being, and facilitate access to services that improve the lives of animals and their families. We are committed to creating a caring community that promotes adoption, rescue and responsible pet care.
          </p>
        </div>
      </section>

      <div className="section-4">
        <div className="report">

          <div className="r-texts">
            <h1 className="title-2">Report</h1>
            <p className="r-text">
              Pawtner is dedicated to making a meaningful difference in the lives of pets and their families. We connect animals in need with loving homes, provide essential resources for their care and well-being, and offer easy access to veterinary services. Our goal is to create a supportive community that promotes adoption, rescue, and responsible pet ownership.
            </p>
          </div>
          <img className="cat-yell" src="./src/img/yell-cat.png" />

        </div>
      </div>

      <section className="frame">
        <section className="caring">
          <img className="caring-puppy" src="./src/img/caring-dog.png" />
          <div className="caring-text">
            <h1 className="title-2">Caring</h1>
            <p className="info-text1">
              Pawtner is dedicated to making a meaningful difference in the lives of pets and their families. We connect animals in need with loving homes, provide essential resources for their care and well-being, and offer easy access to veterinary services. Our goal is to create a supportive community that promotes adoption, rescue, and responsible pet ownership.            </p>
          </div>
        </section>
        <section className="buy">
          <div className="buy-text">
            <h1 className="title-4">Buy</h1>
            <p className="info-text1">
              Pawtner is dedicated to making a meaningful difference in the lives of pets and their families. We connect animals in need with loving homes, provide essential resources for their care and well-being, and offer easy access to veterinary services. Our goal is to create a supportive community that promotes adoption, rescue, and responsible pet ownership.            </p>
          </div>
          <img className="buy-cat" src="./src/img/buy-cat.png" />
        </section>
      </section>

      <div className="f-c">
        <img className="footer-img" src="./src/img/footer.png" />
      </div>
    </div>
  );
}

export default LandingPage;
