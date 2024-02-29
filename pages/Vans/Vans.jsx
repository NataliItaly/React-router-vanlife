import React from "react";
import { Link } from "react-router-dom";
import "../../server";

export default function Vans() {
  const [vans, setVans] = React.useState([]);
  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        setVans(data.vans);
      });
  }, []);

  const vansElements = vans.map((van) => {
    /*  const buttonStyle =
      vans.type === "simple"
        ? { background: "#E17654" }
        : van.type === "rugged"
        ? { background: "#115E59" }
        : { background: "#161616" };
    console.log(buttonStyle); */
    console.log(van.id);
    return (
      <li className="vans-item" key={van.name}>
        <Link
          to={`/vans/${van.id}`}
          className="vans-link"
          aria-label={`View details for ${van.name},
                             priced at $${van.price} per day, type ${van.type}`}
        >
          <div className="vans-header">
            <h2 className="vans-title"> `${van.name} `</h2>
            <p className="vans-price">
              <span>${van.price}</span>
              <span>/day</span>
            </p>
          </div>
          <img src={van.imageUrl} alt={van.description} className="vans-img" />
          <div className={`van-type van-type-${van.type}`}>{van.type}</div>
        </Link>
      </li>
    );
  });

  const tabs = [...new Set(vans.map((van) => van.type))].map((van) => (
    <li className="vans-tab" key={van}>
      {van}
    </li>
  ));
  //console.log(tabs);
  return (
    <section id="vans">
      <div className="vans-tabs">
        <ul className="vans-tabs-list">{tabs}</ul>
        <button className="vanc-tabs-button">Clear filters</button>
      </div>
      <h1>Explore our van options</h1>
      <ul id="vans-list">{vansElements}</ul>
    </section>
  );
}
