import { prettyDOM, render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import Edit from './Edit.js';

test('Edit view should render our Edit form', async () => {
  const container = render(
    <MemoryRouter initialEntries={['/edit/32']}>
      <Route exact path="/edit/:id">
        <Edit currentUser={{ user: { id: 'd1beb9ec-d137-4e7f-ac5c-4c9197075a15' } }} />
      </Route>
    </MemoryRouter>
  );
  await screen.findByDisplayValue('Portland, ME');
  expect(container).toMatchSnapshot();
});
