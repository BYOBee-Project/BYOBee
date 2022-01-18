import React from 'react';
import './BeeDetail.css';
import { findBeeById } from '../../services/bees';
import { useState } from 'react';

export default function BeeDetail(props) {
  const id = props.match.params.id;
  const [currentBee, setCurrentBee] = useState({});

  const fetchBee = async () => {
    const data = await findBeeById(id);
    setCurrentBee(data);
  };
  fetchBee();

  return <div className="BeeDetail">{currentBee.name}</div>;
}
