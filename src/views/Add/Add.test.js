import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import Add from './Add.js';

test('Add view should render the Add component', async () => {
  const container = render(
    <MemoryRouter initialEntries={['/beeform/6']}>
      <Route exact path="/beeform/:id">
        <Add currentUser={{ user: { id: 'd1beb9ec-d137-4e7f-ac5c-4c9197075a15' } }} />
      </Route>
    </MemoryRouter>
  );
  await screen.findByText('Alfalfa Leafcutter Bee');
  expect(container).toMatchSnapshot();
});
