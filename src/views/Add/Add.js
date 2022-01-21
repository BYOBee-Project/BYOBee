import BeeForm from '../../components/BeeForm/BeeForm';
import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { findBeeById } from '../../services/bees';
import { client } from '../../services/client';
import { addSubmission } from '../../services/submissions';

export default function Add({ currentUser }) {
  const params = useParams();
  const [newBee, setNewBee] = useState('');
  const [date, setDate] = useState('');
  const [photo, setPhoto] = useState('');
  const [observation, setObservation] = useState('');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState(null);
  const currentUserId = currentUser.user.id;
  const beeId = newBee.id;
  const beeName = newBee.name;
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
      await addSubmission(beeName, date, photo, observation, location, currentUserId, beeId);
      setMessage('Nice! Your bee has been added.');
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
          message,
          setMessage,
          handleSubmit,
          handleUpload,
          newBee,
        }}
      />
    </div>
  );
}
