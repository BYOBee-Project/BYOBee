import React, { useState } from 'react';
import './BeeForm.css';
import { useEffect } from 'react';
import { addSubmission, findBeeById } from '../../services/bees';
import { useParams, useHistory } from 'react-router-dom';
import { client } from '../../services/client';

export default function BeeForm({ currentUser }) {
  const params = useParams();
  const [newBee, setNewBee] = useState('');
  const [date, setDate] = useState('');
  const [photo, setPhoto] = useState('');
  const [observation, setObservation] = useState('');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState(null);

  const currentUserId = currentUser.user.id;
  const beeId = newBee.id;

  const history = useHistory();

  useEffect(() => {
    const fetchBee = async () => {
      const data = await findBeeById(params.id);
      setNewBee(data);
    };
    fetchBee();
  }, [params.id]);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await addSubmission(date, photo, observation, location, currentUserId, beeId);
      setMessage('Nice!');
      setTimeout(() => {
        history.push('/profile');
      }, 1500);
    } catch {
      setMessage('Oh no! Something went wrong!');
    }
  };
  const handleUpload = async (event) => {
    event.preventDefault();
    try {
      if (!event.target.files || event.target.files.length === 0) {
        throw new Error('You must select an image to upload.');
      }

      const file = event.target.files[0];
      const fileExt = file.name.split('.').pop();
      const fileName = `${new Date().toISOString()}.${fileExt}`;
      const filePath = `${currentUserId}/${beeId}/${fileName}`;

      setPhoto(
        `https://purcoqerkuxhmrkzgmyk.supabase.in/storage/v1/object/public/images/${filePath}`
      );

      let { error: uploadError } = await client.storage.from('images').upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      {message && <p className="message">{message}</p>}
      <div className="BeeForm">
        <h1>Add a {newBee.name} to your collection!</h1>
        <form className="bee-form-form">
          <label className="bee-form-label">Add a photo:</label>
          <input type="file" id="single" accept="image/*" onChange={handleUpload} />
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
    </>
  );
}
