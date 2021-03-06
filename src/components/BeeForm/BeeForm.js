import React from 'react';
import './BeeForm.css';

export default function BeeForm({
  date,
  setDate,
  observation,
  setObservation,
  location,
  setLocation,
  message,
  handleSubmit,
  handleUpload,
  newBee,
}) {
  return (
    <>
      <div className="bee-form">
        <h1 className="bee-form-title">{newBee.name}</h1>
        <form className="bee-form-form">
          <label className="bee-form-label">Add a photo:</label>
          <input required type="file" id="single" accept="image/*" onChange={handleUpload} />
          <label className="bee-form-label">Add a date:</label>
          <input
            required
            type="date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
          <label className="bee-form-label">Where did you encounter the bee?</label>
          <input
            required
            type="textfield"
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
          <label className="bee-form-label">Any other notes or observations?</label>
          <input
            required
            type="textarea"
            value={observation}
            onChange={(e) => {
              setObservation(e.target.value);
            }}
          />
          {message && <p className="message">{message}</p>}
          <button className="bee-form-button" onClick={handleSubmit}>
            Save
          </button>
        </form>
      </div>
    </>
  );
}
