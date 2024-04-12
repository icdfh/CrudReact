import React, { useContext } from 'react';
import { AdvertisementContext } from '../context/AdvertisementContext';
import Advertisement from './Advertisement';

function AdvertisementBoard() {
  const { advertisements } = useContext(AdvertisementContext);

  return (
    <div>
      {advertisements.map(ad => (
        <Advertisement key={ad.id} ad={ad} />
      ))}
    </div>
  );
}

export default AdvertisementBoard;
