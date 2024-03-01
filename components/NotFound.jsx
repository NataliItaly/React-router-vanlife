import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="host" id="not-found">
      <h1>Page not found</h1>
      <Link className="not-found-link" to="/">
        Back to main page
      </Link>
    </section>
  );
}
