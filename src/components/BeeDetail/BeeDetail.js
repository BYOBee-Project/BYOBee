import React from 'react';
import './BeeDetail.css';
import { findBeeById } from '../../services/bees';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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

  // async function handleClick() {
  //  await
  // }

  return (
    <div className="BeeDetail">
      {currentBee.name}
      <Link to={`/beeform/${id}`} className="bee-card-Link">
        add to collection
      </Link>
    </div>
  );
}