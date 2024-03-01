import React from "react";
import { useOutletContext } from "react-router-dom";

export default function Pricing() {
  const { currentVan } = useOutletContext();

  return (
    <div className="price-info">
      <span className="price">$ {currentVan.price}</span> <span> /day</span>
    </div>
  );
}
