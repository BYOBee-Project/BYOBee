import React from 'react';
import './BeeDetail.css';
import { findBeeById } from '../../services/bees';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function BeeDetail({ currentUser }) {
  const params = useParams();
  const [currentBee, setCurrentBee] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBee = async () => {
      const data = await findBeeById(params.id);
      setCurrentBee(data);
      setLoading(false);
    };
    fetchBee();
  }, [params.id]);

  if (loading) return <h1 className="loader">Loading...</h1>;
  return (
    <div className="bee-detail">
      <h1 className="bee-detail-title">{currentBee.name}</h1>
      <div className="bee-detail-links">
        {!currentUser && (
          <button>
            <Link to={`/auth`} className="bee-card-link">
              + Add to Collection
            </Link>
          </button>
        )}
        {currentUser && (
          <button>
            <Link to={`/beeform/${params.id}`} className="bee-card-link">
              + Add to Collection
            </Link>
          </button>
        )}
      </div>
      <div className="bee-detail-images">
        <img className="bee-detail-image" src={currentBee.image1} alt={currentBee.name} />
        <img className="bee-detail-image" src={currentBee.image2} alt={currentBee.name} />
      </div>

      <div className="bee-details">
        <p className="bee-detail-info">
          <span className="bee-detail-label">Species: </span>
          {currentBee.species}
        </p>
        <p className="bee-detail-info">
          <span className="bee-detail-label">Family: </span>
          {currentBee.family}
        </p>
        <p className="bee-detail-info">
          <span className="bee-detail-label">Region: </span>
          {currentBee.region}
        </p>
        <p className="bee-detail-info">
          <span className="bee-detail-label">Description: </span>
          {currentBee.description}
        </p>
        <p className="bee-detail-info">
          <span className="bee-detail-label">Preferred Forage: </span>
          {currentBee.forage}
        </p>
        <p className="bee-detail-info">
          <span className="bee-detail-label">Nesting Habits: </span>
          {currentBee.habitat}
        </p>
        <p className="bee-detail-info">
          <span className="bee-detail-label">Active Season: </span>
          {currentBee.season}
        </p>
        <p className="bee-detail-info">
          <span className="bee-detail-label">Fun Fact: </span>
          {currentBee.fact}
        </p>
      </div>
      <Link to={`/`} className="bee-detail-link">
        Back to Home
      </Link>
    </div>
  );
}
