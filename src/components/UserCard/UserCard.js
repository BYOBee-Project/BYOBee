import React from 'react';
import './UserCard.css';
import { Link } from 'react-router-dom';

export default function UserCard({ userBee, handleDelete, handleClick }) {
  return (
    <div className="user-card">
      <h3 className="user-card-title">{userBee.name}</h3>
      <Link to={`/profile/${userBee.id}`}>
        <img className="user-card-image" src={userBee.image1} />
      </Link>
      <div className="user-card-buttons">
        <button>
          <Link to={`/profile/${userBee.id}`}>View</Link>
        </button>
        <button>
          <Link to={`/edit/${userBee.id}`}>Edit</Link>
        </button>
        <button className="delete-button" onClick={() => handleDelete(userBee)}>
          x
        </button>
      </div>
    </div>
  );
}
