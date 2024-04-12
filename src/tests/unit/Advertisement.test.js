import React from 'react';
import { render, screen } from '@testing-library/react';
import Advertisement from '../components/Advertisement';
import { AdvertisementProvider } from '../context/AdvertisementContext';

test('displays advertisement content', () => {
  const ad = { id: 1, title: 'Test Title', description: 'Test Description' };
  render(
    <AdvertisementProvider>
      <Advertisement ad={ad} />
    </AdvertisementProvider>
  );
  
  expect(screen.getByText('Test Title')).toBeInTheDocument();
  expect(screen.getByText('Test Description')).toBeInTheDocument();
});
