import React from "react";
import "./userCard.css";

export default function UserCard({ name, surname, nickname, age, img_url, email, occupation, location }) {
  return (
    
    <div className="card">
      <img src={img_url} alt={`${name}'s avatar`} />
      <h2>Name: {name} {surname}</h2>
      <h3>{nickname}</h3>
      <p className="age">{age}</p>
      <p className="occupation">{occupation}</p>
      <p className="location">{location}</p>
      <a href={`mailto:${email}`}>{email}</a>
    </div>
  );
}
