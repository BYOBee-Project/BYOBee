import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home.js';

test('Add view should render the Add component', async () => {
  const container = render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );
  await screen.findByText('Alfalfa Leafcutter Bee');
  expect(container).toMatchSnapshot();
});
