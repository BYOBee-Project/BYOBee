import React from 'react';
import './BeeDetail.css';
import { findBeeById } from '../../services/bees';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function BeeDetail({ currentUser }) {
  const params = useParams();
  // const id = props.match.params.id;
  const [currentBee, setCurrentBee] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBee = async () => {
      const data = await findBeeById(params.id);
      setCurrentBee(data);
      setLoading(false);
    };
    fetchBee();
  }, [params.id]);

  if (loading) return <h1 className="loader">Loading...</h1>;
  return (
    <div className="BeeDetail">
      {currentBee.name}
      {currentUser && (
        <Link to={`/beeform/${params.id}`} className="bee-card-Link">
          add to collection
        </Link>
      )}
      {!currentUser && (
        <Link to={`/auth`} className="bee-card-Link">
          add to collection
        </Link>
      )}
    </div>
  );
}
