import React from 'react';
import './Profile.css';
import { logout } from '../../services/users';
import { getUserBees } from '../../services/submissions';
import { useState, useEffect } from 'react';
import UserCard from '../../components/UserCard/UserCard';

export default function Profile({ setCurrentUser, currentUser }) {
  const [userBees, setUserBees] = useState([]);
  const [loading, setLoading] = useState(true);

  const id = currentUser.user.id;

  const logoutUser = async () => {
    await logout();
    setCurrentUser(null);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUserBees(id);
      setUserBees(data);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="profile">
      {userBees.map((userBee) => (
        <UserCard key={userBee.id} userBee={userBee} />
      ))}

      <button onClick={logoutUser}>Logout</button>
    </div>
  );
}
