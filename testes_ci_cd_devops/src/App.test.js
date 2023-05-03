import { render } from '@testing-library/react';
import App from './App';

let container = null;
test('renders learn react link', () => {
  render(<App />, container);
  expect(container).toBeInTheDocument();
});
