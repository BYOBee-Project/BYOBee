import React from 'react';
import './UserDetail.css';
import { findUserBee } from '../../services/submissions';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function UserDetail(props) {
  const id = props.match.params.id;

  const [userBee, setUserBee] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await findUserBee(id);
      setUserBee(data);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  if (loading) return <h1 className="loader">Loading...</h1>;
  return (
    <div className="user-detail">
      <h1 className="user-detail-title">{userBee.name}</h1>
      <img className="user-detail-image" src={userBee.image1} alt={userBee.name} />
      <div className="user-details">
        <p className="user-detail-date">
          <span className="user-detail-label">Date Spotted: </span>
          {userBee.date}
        </p>
        <p className="user-detail-location">
          <span className="user-detail-label">Location Spotted: </span>
          {userBee.location}
        </p>
        <p className="user-detail-observation">
          <span className="user-detail-label">Observations: </span>
          {userBee.observations}
        </p>
      </div>
      <button className="user-detail-button">
        <Link to={`/profile`} className="user-detail-link">
          Back to Profile
        </Link>
      </button>
    </div>
  );
}
