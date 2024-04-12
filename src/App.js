import React from 'react';
import { AdvertisementProvider } from './context/AdvertisementContext';

import AdvertisementBoard from './components/AdvertisementBoard';
import AddAdvertisementForm from './components/AddAdvertisementForm';

function App() {
  return (
    <AdvertisementProvider>
      <div>
        <h1>Advertisement Board</h1>
        <AddAdvertisementForm />
        <AdvertisementBoard />
      </div>
    </AdvertisementProvider>
  );
}

export default App;
