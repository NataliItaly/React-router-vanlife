import React from "react";
import {
  useParams,
  Link,
  Outlet,
  NavLink,
  useSearchParams,
} from "react-router-dom";

export default function HostVanDetail() {
  /**
   * Challenge (not optional!): build the shared UI portion of the
   * Host Van Detail page. This is
   *
   * Optional portion: also style it to look like the design.
   *
   * For now, get the data from a request to `/api/host/vans/:id`
   * and display the van image, name, price, type
   */
  const params = useParams();
  const [currentVan, setCurrentVan] = React.useState(null);

  const [searchParams, setSearchParams] = useSearchParams();

  React.useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setCurrentVan(data.vans);
        //console.log(data.vans[id]);
      });
  }, []);
  //console.log(currentVan);

  if (!currentVan) {
    return <h1>Loading...</h1>;
  }

  return (
    <section className="host" id="host-vans-detail">
      <div className="container-white">
        <Link to=".." className="back-button" relative="path">
          &larr; <span>Back to all vans</span>
        </Link>
        <div className="host-van-detail-item">
          <img
            src={currentVan.imageUrl}
            width={300}
            className="host-van-detail-img"
          />
          <div className="host-van-detail-text">
            <h2 className="host-van-detail-title">{currentVan.name}</h2>
            <p className="host-van-detail-price">
              <b>$ {currentVan.price}</b>/day
            </p>
            <p className={`van-type van-type-${currentVan.type}`}>
              {currentVan.type}
            </p>
          </div>
        </div>
        <ul className="host-detail-nav">
          <li>
            <NavLink
              to="."
              end
              className={({ isActive }) =>
                isActive
                  ? "host-detail-link host-detail-link-active"
                  : "host-detail-link"
              }
            >
              Details
            </NavLink>
          </li>
          <li>
            <NavLink
              to="pricing"
              className={({ isActive }) =>
                isActive
                  ? "host-detail-link host-detail-link-active"
                  : "host-detail-link"
              }
            >
              Pricing
            </NavLink>
          </li>
          <li>
            <NavLink
              to="photos"
              className={({ isActive }) =>
                isActive
                  ? "host-layout-link host-layout-link-active"
                  : "host-detail-link"
              }
            >
              Photos
            </NavLink>
          </li>
        </ul>
        <Outlet context={{ currentVan }} />
      </div>
    </section>
  );
}
