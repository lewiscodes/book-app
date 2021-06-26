import { render } from '@testing-library/react';
import Home from './';

test('runs a test', () => {
  render(<Home />);
  expect(1).toBeTruthy();
});
