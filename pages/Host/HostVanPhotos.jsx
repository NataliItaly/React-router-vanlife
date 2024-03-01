import React from "react";
import { useOutletContext } from "react-router-dom";

export default function Photos() {
  const { currentVan } = useOutletContext();
  console.log(currentVan);

  return (
    <div className="host-detail-photo-info">
      <img src={currentVan.imageUrl} alt={currentVan.description} width="150" />
    </div>
  );
}
