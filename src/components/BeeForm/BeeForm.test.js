import { render, screen } from '@testing-library/react';
import BeeForm from './BeeForm.js';
import { MemoryRouter } from 'react-router-dom';

test('About page should render about us stuff', async () => {
  const container = render(
    <MemoryRouter>
      <BeeForm newBee={{ newBee: 'Prunus Miner Bee' }} />
    </MemoryRouter>
  );
  screen.findByText('Add a photo:');
  expect(container).toMatchSnapshot();
});
