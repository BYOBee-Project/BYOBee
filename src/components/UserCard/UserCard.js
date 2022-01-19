import React from 'react';
import './UserCard.css';
import { Link } from 'react-router-dom';

export default function UserCard({ userBee, handleDelete, handleEdit }) {
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
        <button className="edit-button" onClick={() => handleEdit(userBee)}>
          Edit
        </button>
      </div>
    </div>
  );
}
