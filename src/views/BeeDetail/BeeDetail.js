import React from 'react';
import './BeeDetail.css';
import { findBeeById } from '../../services/bees';
import { useState, useEffect } from 'react';

export default function BeeDetail(props) {
  const id = props.match.params.id;
  const [currentBee, setCurrentBee] = useState({});

  useEffect(() => {
    const fetchBee = async () => {
      const data = await findBeeById(id);
      setCurrentBee(data);
    };
    fetchBee();
  }, [id]);

  return <div className="BeeDetail">{currentBee.name}</div>;
}
