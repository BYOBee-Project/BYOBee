import React from 'react';
import './Profile.css';
import { logout } from '../../services/users';

export default function Profile({ setCurrentUser }) {
  const logoutUser = async () => {
    await logout();
    setCurrentUser(null);
  };

  return (
    <div className="profile">
      <button onClick={logoutUser}>Logout</button>
    </div>
  );
}
