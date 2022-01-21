import { render, screen } from '@testing-library/react';
import About from './About.js';

test('About page should render about us stuff', async () => {
  const container = render(<About />);
  screen.findByText('About the hive');
  expect(container).toMatchSnapshot();
});
