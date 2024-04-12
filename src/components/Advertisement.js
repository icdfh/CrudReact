import React, { useContext } from 'react';
import { AdvertisementContext } from '../context/AdvertisementContext';

function Advertisement({ ad }) {
  const { removeAdvertisement } = useContext(AdvertisementContext);

  return (
    <div>
      <h3>{ad.title}</h3>
      <p>{ad.description}</p>
      <button onClick={() => removeAdvertisement(ad.id)}>Delete</button>
    </div>
  );
}

export default Advertisement;
