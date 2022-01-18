import React from 'react';
import './BeeCard.css';
import { Link } from 'react-router-dom';

export default function BeeCard({ bee }) {
  return (
    <div className="bee-card">
      <h3>{bee.name}</h3>
      <Link to={`/${bee.id}`}>
        <img className="card-image" src={bee.image1} />
      </Link>
    </div>
  );
}
