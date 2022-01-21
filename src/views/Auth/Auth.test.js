import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Auth from './Auth';

test('Auth view should show our login page', async () => {
  const container = render(
    <MemoryRouter>
      <Auth />
    </MemoryRouter>
  );
  screen.findByText('Sign-in');
  expect(container).toMatchSnapshot();
});
