import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function HostLayout() {
  /*  <NavLink
              to="/host"
              end */
  // end is a property that is = true, helps to not match to the route path
  return (
    <>
      <section className="host-layout">
        <ul className="host-layout-nav">
          <li>
            <NavLink
              to="."
              end
              className={({ isActive }) =>
                isActive
                  ? "host-layout-link host-layout-link-active"
                  : "header-link"
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="income"
              className={({ isActive }) =>
                isActive
                  ? "host-layout-link host-layout-link-active"
                  : "header-link"
              }
            >
              Income
            </NavLink>
          </li>
          <li>
            <NavLink
              to="vans"
              className={({ isActive }) =>
                isActive
                  ? "host-layout-link host-layout-link-active"
                  : "header-link"
              }
            >
              Vans
            </NavLink>
          </li>
          <li>
            <NavLink
              to="reviews"
              className={({ isActive }) =>
                isActive
                  ? "host-layout-link host-layout-link-active"
                  : "header-link"
              }
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </section>
      <Outlet />
    </>
  );
}
