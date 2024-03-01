import React from "react";
import { useParams, Link, useLocation } from "react-router-dom";

export default function VanDetail() {
  const params = useParams();
  //console.log(params.id);
  const [van, setVan] = React.useState(null);

  const location = useLocation();

  React.useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((response) => response.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);

  const linkPath = location.state.type
    ? `..?type=${location.state.type}`
    : "..";
  const linkText = location.state.type ? location.state.type : "all";
  console.log(location.state.search);

  return (
    <div className="van-detail-container">
      {van ? (
        <section className="van-detail" id="van-detail">
          <Link
            to={linkPath}
            className="back-button"
            relative="path"
            style={{ order: "-2", width: "fit-content" }}
          >
            &larr; <span>Back to {linkText} vans</span>
          </Link>

          <h2>{van.name}</h2>
          <i className={`van-type van-type-${van.type} selected`}>{van.type}</i>
          <img src={van.imageUrl} />
          <p className="van-price">
            <span>${van.price}</span>/day
          </p>
          <p className="van-description">{van.description}</p>
          <button className="van-detail-button primary-button">
            Rent this van
          </button>
        </section>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
