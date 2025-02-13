import { render, screen } from '@testing-library/react';
import App from './App';

test('Megkeresi az App szöveget', () => {
  render(<App />);
  const linkElement = screen.getByText(/App/i);
  expect(linkElement).toBeInTheDocument();
});
