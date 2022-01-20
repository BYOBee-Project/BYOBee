import React from 'react';
import './UserCard.css';
import { Link } from 'react-router-dom';

export default function UserCard({ userBee, handleDelete, handleClick }) {
  return (
    <div className="user-bee-card">
      <h3>{userBee.name}</h3>
      <Link to={`/profile/${userBee.id}`}>
        <img className="card-image" src={userBee.image1} />
      </Link>
      <div className="user-card-buttons">
        <button className="delete-button" onClick={() => handleDelete(userBee)}>
          Delete
        </button>
        <button>
          <Link to={`/edit/${userBee.id}`}>Edit</Link>
        </button>
      </div>
    </div>
  );
}
