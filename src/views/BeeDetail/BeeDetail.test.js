import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import BeeDetail from './BeeDetail.js';

test('BeeDetail displays Bee detail information', async () => {
  const container = render(
    <MemoryRouter initialEntries={['/bees/6']}>
      <Route exact path="/bees/:id">
        <BeeDetail currentUser={{ user: { id: 'd1beb9ec-d137-4e7f-ac5c-4c9197075a15' } }} />
      </Route>
    </MemoryRouter>
  );
  await screen.findByText('Alfalfa Leafcutter Bee');
  expect(container).toMatchSnapshot();
});
