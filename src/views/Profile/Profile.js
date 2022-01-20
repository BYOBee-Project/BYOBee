import React from 'react';
import './Profile.css';
import { logout } from '../../services/users';
import { getUserBees } from '../../services/submissions';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import UserCard from '../../components/UserCard/UserCard';
import { deleteSubmission } from '../../services/submissions';

export default function Profile({ setCurrentUser, currentUser }) {
  const id = currentUser.user.id;
  const [userBees, setUserBees] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  const logoutUser = async () => {
    await logout();
    history.push('/');
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

  const handleDelete = async (userBee) => {
    await deleteSubmission(userBee.id);
    const data = await getUserBees(id);
    setUserBees(data);
  };

  if (loading) return <h1 className="loader">Loading...</h1>;

  return (
    <div className="profile">
      <h1 className="profile-title">Bee Collection</h1>
      <div className="profile-cards">
        {userBees.map((userBee) => (
          <UserCard key={userBee.id} userBee={userBee} handleDelete={handleDelete} />
        ))}
      </div>
      <button onClick={logoutUser}>Logout</button>
    </div>
  );
}
