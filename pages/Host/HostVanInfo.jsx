import React from "react";
import { useOutletContext } from "react-router-dom";

export default function Info() {
  const { currentVan } = useOutletContext();

  return (
    <div id="host-van-detail-info">
      <dl>
        <div className="term-line">
          <dt>Name:</dt> <dd>{currentVan.name}</dd>
        </div>
        <div className="term-line">
          <dt>Category:</dt> <dd>{currentVan.type}</dd>
        </div>
        <div className="term-line">
          <dt>Description:</dt> <dd>{currentVan.description}</dd>
        </div>
        <div className="term-line">
          <dt>Visibility:</dt> <dd>Public</dd>
        </div>
      </dl>
    </div>
  );
}
