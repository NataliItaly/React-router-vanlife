import React from 'react'
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <section id="home">
        <h1>You got the travel plans, we got the travel vans.</h1>
        <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
        <Link className="button">Find your van</Link>
    </section>
  )
}