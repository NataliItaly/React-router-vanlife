import React from "react";
import { Link, useSearchParams } from "react-router-dom";
//import "../../server";
import { getVans } from "../../api";

export default function Vans() {
  const [vans, setVans] = React.useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  /*  fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => {
        setVans(data.vans);
      }); */
  React.useEffect(() => {
    async function loadVans() {
      setLoading(true);
      try {
        const data = await getVans();
        //console.log(data);
        setVans(data);
      } catch (err) {
        console.log(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    loadVans();
  }, []);

  const displayedElements = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  const vansElements = displayedElements.map((van) => {
    /*  const buttonStyle =
      vans.type === "simple"
        ? { background: "#E17654" }
        : van.type === "rugged"
        ? { background: "#115E59" }
        : { background: "#161616" };
    console.log(buttonStyle); */

    // absolute path: <Link to={`/vans/${van.id}`}>
    // relative path:  <Link to={van.id}

    return (
      <li className="vans-item" key={van.name}>
        <Link
          to={van.id}
          state={{ type: typeFilter }}
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

  const tabs = [...new Set(vans.map((van) => van.type))].map((van) => {
    const selectedTabClass = typeFilter === van ? `vans-tab-${van}` : "";
    return (
      <Link
        to={`?type=${van}`}
        className={`vans-tab ${selectedTabClass}`}
        key={van}
      >
        {van}
      </Link>
    );
  });
  //console.log(tabs);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error.message}</h1>;
  }

  return (
    <section id="vans">
      <div className="vans-tabs">
        <ul className="vans-tabs-list">{tabs}</ul>
        {typeFilter && (
          <Link to="." className="vans-tabs-clear-filter">
            Clear filters
          </Link>
        )}
      </div>
      <h1>Explore our van options</h1>
      <ul id="vans-list">{vansElements}</ul>
    </section>
  );
}
