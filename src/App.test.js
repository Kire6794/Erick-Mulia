import { render, screen } from '@testing-library/react';
import App from './App';

test('renders name', () => {
  render(<App />);
  const nameElement = screen.getByText(/Erick Alexander Mulia Goycoolea/i);
  expect(nameElement).toBeInTheDocument();
});
