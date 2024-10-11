import React from "react";
import "../carCard/carCard.css";

export default function CarCard({
  carBrand,
  carName,
  carModel,
  carYear,
  carPrice,
  carColor,
  carType,
  carLocation,
  img_url,
}) {
  return (
    <div className="car-card">
      <img src={img_url} alt={`${carBrand} ${carModel}`} />
      <h2>
        {carBrand} {carName} {carModel}
      </h2>
      <p className="carYear">Year: {carYear}</p>
      <p className="carPrice">Price: {carPrice}</p>
      <p className="carColor">Color: {carColor}</p>
      <p className="carType">Type: {carType}</p>
      <p className="carLocation">Location: {carLocation}</p>
    </div>
  );
}
