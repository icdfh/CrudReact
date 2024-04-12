import React, { useState, useContext } from 'react';
import { AdvertisementContext } from '../context/AdvertisementContext';

function AddAdvertisementForm() {
  const { addAdvertisement } = useContext(AdvertisementContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addAdvertisement({ id: Date.now(), title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
      <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Description"></textarea>
      <button type="submit">Add Advertisement</button>
    </form>
  );
}

export default AddAdvertisementForm;
