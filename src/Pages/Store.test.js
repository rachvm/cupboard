import { render, screen } from '@testing-library/react';
import Store from './Store';

test('renders learn react link', () => {
  render(<Store />);
  
  const linkElement = screen.getByText(/myCupboard/i);
  expect(linkElement).toBeInTheDocument();
});
