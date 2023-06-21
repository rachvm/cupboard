import { render, screen } from '@testing-library/react';
import Store from './Store';

test('checks app name is present', () => {
  render(<Store />);
  
  const linkElement = screen.getByText(/myCupboard/i);
  expect(linkElement).toBeInTheDocument();
});


describe("<Store />", () => {

  test('Check that a input box is present', () => {
    render(<Store/>);

    const inputEl = screen.getByTestId("food-input");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "Noodles");
  });
});

