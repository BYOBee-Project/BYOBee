import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', async () => {
  render();
  const container = render(<App />);
  await screen.findByText('Get to know the bees in your backyard!');
  expect(container).toMatchSnapshot();
});
