import React from 'react';
import './Profile.css';
import { logout } from '../../services/users';
import { getUserBees } from '../../services/submissions';
import { useState, useEffect } from 'react';

export default function Profile({ setCurrentUser, currentUser }) {
  const [userBees, setUserBees] = useState([]);

  const id = currentUser.user.id;

  const logoutUser = async () => {
    await logout();
    setCurrentUser(null);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUserBees(id);
      setUserBees(data);
    };
    fetchData();
  }, [id]);

  return (
    <div className="profile">
      <button onClick={logoutUser}>Logout</button>
    </div>
  );
}
