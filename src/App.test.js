import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Welcome ! Create Hacks as a text', () => {
  render(<App />);
  const linkElement = screen.getByText('Welcome Create Hacks',{exact:false});
  expect(linkElement).toBeInTheDocument();
});
