import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import Profile from './Profile.js';

test.skip('Profile view should render the Profile component', async () => {
  const container = render(
    <MemoryRouter>
      <Route>
        <Profile currentUser={{ user: { id: 'd1beb9ec-d137-4e7f-ac5c-4c9197075a15' } }} />
      </Route>
    </MemoryRouter>
  );
  await screen.findByText('Bee Collection');
  expect(container).toMatchSnapshot();
});
