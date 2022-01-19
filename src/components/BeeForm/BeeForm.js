import React, { useState } from 'react';
import './BeeForm.css';
import { useEffect } from 'react';
import { findBeeById } from '../../services/bees';
import { useParams } from 'react-router-dom';

export default function BeeForm({ currentUser }) {
  const params = useParams();
  const [newBee, setNewBee] = useState('');
  const [date, setDate] = useState('');
  const [photo, setPhoto] = useState('');
  const [observation, setObservation] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    const fetchBee = async () => {
      const data = await findBeeById(params.id);
      setNewBee(data);
    };
    fetchBee();
  }, [params.id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('clicking');
  };

  return (
    <div className="BeeForm">
      <h1>Add a {newBee.name} to your collection!</h1>
      <form className="bee-form-form">
        <label className="bee-form-label">Add a photo:</label>
        <input type="file" />
        <label className="bee-form-label">Add a date:</label>
        <input
          type="date"
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
        {/* when we have location capabilities, update this */}
        <label className="bee-form-label">Where did you encounter the bee?</label>
        <input
          type="textfield"
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        />
        <label className="bee-form-label">Any other notes or observations?</label>
        <input
          type="textarea"
          onChange={(e) => {
            setObservation(e.target.value);
          }}
        />
        <button onClick={handleSubmit}>Save</button>
      </form>
    </div>
  );
}
