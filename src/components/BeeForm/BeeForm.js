import React, { useState } from 'react';
import './BeeForm.css';
import { useEffect } from 'react';
import { findBeeById } from '../../services/bees';
import { useParams } from 'react-router-dom';

export default function BeeForm({ currentUser }) {
  const params = useParams();
  const [newBee, setNewBee] = useState('');

  useEffect(() => {
    const fetchBee = async () => {
      const data = await findBeeById(params.id);
      setNewBee(data);
    };
    fetchBee();
  }, [params.id]);

  return <div className="BeeForm"></div>;
}
