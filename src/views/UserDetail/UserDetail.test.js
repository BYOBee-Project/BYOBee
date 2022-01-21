import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import UserDetail from './UserDetail.js';

test('UserDetail view should render the UserDetail page', async () => {
  const container = render(
    <MemoryRouter>
      <UserDetail
        match={{ params: { id: 32 } }}
        currentUser={{ user: { id: 'd1beb9ec-d137-4e7f-ac5c-4c9197075a15' } }}
      />
    </MemoryRouter>
  );
  await screen.findByText('Date Spotted:');
  expect(container).toMatchSnapshot();
});
