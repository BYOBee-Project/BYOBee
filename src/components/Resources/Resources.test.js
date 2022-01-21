import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Resources from './Resources.js';

test('Resource should render our resources information', async () => {
  const container = render(
    <MemoryRouter>
      <Resources />
    </MemoryRouter>
  );
  screen.findByText('Support Our Pollinators!');
  expect(container).toMatchSnapshot();
});
