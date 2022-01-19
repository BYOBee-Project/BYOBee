import React from 'react';
import { findUserBee } from '../../services/submissions';
import { useState, useEffect } from 'react';

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
  return <div>{userBee.name}</div>;
}
