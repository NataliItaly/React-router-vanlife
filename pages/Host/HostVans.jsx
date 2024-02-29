import React from "react";
import { Link } from "react-router-dom";

export default function HostVans() {
  const [vans, setVans] = React.useState([]);
  React.useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.vans);
        setVans(data.vans);
      });
  }, []);

  const vansElements = vans.map((van) => {
    console.log(van);
    return (
      <li className="host-vans-item" key={van.id}>
        <Link to={`/host/vans/${van.id}`} className="host-vans-item-link">
          <div className="host-vans-item-text">
            <h3 className="host-vans-item-title">{van.name}</h3>
            <p className="host-vans-item-price">${van.price}/day</p>
          </div>
          <img
            src={van.imageUrl}
            alt="van.description"
            className="host-vans-img"
          />
        </Link>
      </li>
    );
  });
  return (
    <section id="host-vans" className="host">
      <h1>Your listed vans</h1>
      <ul className="host-vans-list">
        {vansElements.length > 0 ? vansElements : <h2>Loading...</h2>}
      </ul>
    </section>
  );
}
