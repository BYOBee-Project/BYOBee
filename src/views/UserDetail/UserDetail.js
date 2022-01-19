import React from 'react';
import { findUserBee } from '../../services/submissions';
import { useState, useEffect } from 'react';

export default function UserDetail(props) {
  const id = props.match.params.id;

  const [userBee, setUserBee] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await findUserBee(id);
      setUserBee(data);
    };
    fetchData();
  }, [id]);

  return <div>{userBee.name}</div>;
}
