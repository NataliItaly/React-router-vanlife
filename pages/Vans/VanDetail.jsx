import React from "react";
import { useParams } from "react-router-dom";

export default function VanDetail() {
  const params = useParams();
  console.log(params.id);
  const [van, setVan] = React.useState(null);

  React.useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((response) => response.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);

  return (
    <div className="van-detail-container">
      {van ? (
        <section className="van-detail" id="van-detail">
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
