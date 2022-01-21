import { render, screen } from '@testing-library/react';
import AuthForm from './AuthForm.js';

test('About page should render about us stuff', async () => {
  const container = render(<AuthForm />);
  screen.findByText('Password');
  expect(container).toMatchSnapshot();
});
