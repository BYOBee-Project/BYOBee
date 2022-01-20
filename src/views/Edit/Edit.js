import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { findUserBee, editSubmission } from '../../services/submissions';
import './Edit.css';
import BeeForm from '../../components/BeeForm/BeeForm';

export default function Edit() {
  const params = useParams();
  const [currentBee, setCurrentBee] = useState({});

  useEffect(() => {
    const fetchBee = async () => {
      const data = await findUserBee(params.id);
      setCurrentBee(data);
    };
    fetchBee();
  }, [params.id]);

  const handleEdit = async (currentBee) => {
    await editSubmission(
      currentBee.id,
      currentBee.name,
      currentBee.date,
      currentBee.image1,
      currentBee.observations,
      currentBee.location
    );
  };

  return <div>{/* <BeeForm handleEdit={handleEdit} currentBee={currentBee} /> */}</div>;
}
