import React from 'react'
import bgImg from "../assets/images/about-bg.png"
import { Link } from "react-router-dom"

export default function About() {
  return (
    <main id="about">
     <section id="about-bg">
      <img src={bgImg} alt="" />
     </section>
     <section id="about-text"> 
      <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
      <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
      (Hitch costs extra 😉)
      </p>
      <p>
      Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
      </p>
    </section>
    <section id="about-explore">
      <h2>Your destination is waiting.
      Your van is ready.</h2>
      <Link className="button">Explore our vans</Link>
    </section>
    </main>
  )
}