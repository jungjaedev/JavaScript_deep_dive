import { render, screen } from '@testing-library/react';
import App from './App';

test('the counter starts at 0', () => {
  render(<App />);
  // screen object를 이용해 id 접근
  const counterElement = screen.getByTestId('counter');
  expect(counterElement).toHaveTextContent(0);
});
