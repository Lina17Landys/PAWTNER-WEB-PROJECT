//import { useState } from 'react'
import NavBar from "../../components/navBar/navBar";
//import LanCards from '../../components/cardsType/landingCards'

import "./landing.css";

function LandingPage() {
  return (
    <>
      <section>
        <div className="container-1">
           <NavBar />
          <div className="texts-div">
           
          <h1>Make the difference</h1>
          <p className="paragraph">
            You can adopt pets, report lost or stray animals, access veterinary
            services, and shop for pet care products. Find your new friend, help
            reunite pets with their owners, schedule veterinary appointments and
            discover offers in our store.
          </p>
          <p className="bold-text">Join us and make a difference today!</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default LandingPage;
