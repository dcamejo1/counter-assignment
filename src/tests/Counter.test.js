// import necessary react testing library helpers here
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
// import the Counter component here
import Counter from "../components/Counter"

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />)
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText('Counter');
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const initialCount = screen.getByText('0');
  expect(initialCount).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  // Find the + button
  const addButton = screen.getByRole('button', { name: "+" });
  
  // Find the count display element
  const countValue = screen.getByTestId("count").textContent;
  expect(parseInt(countValue)).toEqual(0);

  // Click the + button
  act(() => {
    addButton.click();
  });
  
  // Find the count display element
  const countValue2 = screen.getByTestId("count").textContent;

  // Check that the count has been incremented
  expect(parseInt(countValue2)).toEqual(1);
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  // Find the + button
  const subtractButton = screen.getByRole('button', { name: "-" });
  
  // Find the count display element
  const countValue = screen.getByTestId("count").textContent;
  expect(parseInt(countValue)).toEqual(0);

  // Click the - button
  act(() => {
    subtractButton.click();
  });
  
  // Find the count display element
  const countValue2 = screen.getByTestId("count").textContent;

  // Check that the count has been incremented
  expect(parseInt(countValue2)).toEqual(-1);
});
