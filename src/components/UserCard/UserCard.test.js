import { render, screen } from '@testing-library/react';
import UserCard from './UserCard.js';
import { MemoryRouter } from 'react-router-dom';

test('UserCard page should render user card stuff', async () => {
  const container = render(
    <MemoryRouter>
      <UserCard userBee={{ userBee: 'Prunus Miner Bee' }} />
    </MemoryRouter>
  );
  screen.findByText('Prunus Miner Bee');
  expect(container).toMatchSnapshot();
});
