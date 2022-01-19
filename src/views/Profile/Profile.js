import React from 'react';
import './Profile.css';
import { logout } from '../../services/users';
import { getUserBees } from '../../services/submissions';
import { useState, useEffect } from 'react';
import BeeCard from '../../components/BeeCard/BeeCard';
// import { findBeeById } from '../../services/bees';

export default function Profile({ setCurrentUser, currentUser }) {
  const [userBees, setUserBees] = useState([]);
  // const [stockBee, setStockBee] = useState({});
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

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await findBeeById(id);
  //     // console.log(data);
  //   };
  //   fetchData();
  // }, [id]);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="profile">
      {userBees.map((bee) => (
        <BeeCard key={bee.id} bee={bee} />
      ))}

      <button onClick={logoutUser}>Logout</button>
    </div>
  );
}
