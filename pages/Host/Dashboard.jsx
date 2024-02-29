import React from "react";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <section id="dashboard">
      <h1>Wellcome!</h1>;
      <Outlet />
    </section>
  );
}
