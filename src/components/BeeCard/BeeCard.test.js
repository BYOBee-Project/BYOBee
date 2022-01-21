import { render, screen } from '@testing-library/react';
import BeeCard from './BeeCard.js';
import { MemoryRouter } from 'react-router-dom';

test('BeeCard page should render about us stuff', async () => {
  const container = render(
    <MemoryRouter>
      <BeeCard bee={{ bee: 'Prunus Miner Bee' }} />
    </MemoryRouter>
  );
  screen.findByText('Prunus Miner Bee');
  expect(container).toMatchSnapshot();
});
