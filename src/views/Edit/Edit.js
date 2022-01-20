import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { findUserBee, editSubmission } from '../../services/submissions';
import './Edit.css';
import BeeForm from '../../components/BeeForm/BeeForm';
import { useHistory } from 'react-router-dom';
import { client } from '../../services/client';

export default function Edit({ currentUser }) {
  const params = useParams();
  const [newBee, setNewBee] = useState('');
  const [date, setDate] = useState('');
  const [photo, setPhoto] = useState('');
  const [observation, setObservation] = useState('');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState(null);
  const currentUserId = currentUser.user.id;

  const history = useHistory();

  useEffect(() => {
    const fetchBee = async () => {
      const data = await findUserBee(params.id);
      setNewBee(data);
    };
    fetchBee();
  }, [params.id]);

  const handleSubmit = async () => {
    await editSubmission(params.id, date, photo, observation, location);
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
      const filePath = `${currentUserId}/${newBee.bee_id}}/${fileName}`;

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
    <div>
      <BeeForm
        {...{
          date,
          setDate,
          photo,
          setPhoto,
          observation,
          setObservation,
          location,
          setLocation,
          handleSubmit,
          handleUpload,
          newBee,
          message,
        }}
      />
    </div>
  );
}
