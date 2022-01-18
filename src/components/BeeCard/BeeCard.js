import React from 'react';
import './BeeCard.css';

export default function BeeCard({ bee }) {
  return (
    <div className="bee-card">
      <h3>{bee.name}</h3>
      <img className="card-image" src={bee.image1} />
    </div>
  );
}
