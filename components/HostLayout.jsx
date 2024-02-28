import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function HostLayout() {
  return (
    <>
      <div className="host-layout">
        <ul className="host-layout-nav">
          <li>
            <Link to="/host" className="host-layout-link">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/host/income" className="host-layout-link">
              Income
            </Link>
          </li>
          <li>
            <Link to="/host/reviews" className="host-layout-link">
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
}
