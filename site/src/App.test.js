import { render, screen } from '@testing-library/react';
import App from './App';

import * as router from 'react-router'

const navigate = jest.fn()

beforeEach(() => {
  jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate)
})

test('renders bank name and sign up button', () => {
  render(<App />);
  const bankName = screen.getByText(/Purple Bank/);
  const signUpButton = screen.getByText(/Sign Up/);
  expect(bankName).toBeInTheDocument();
  expect(signUpButton).toBeInTheDocument();
});
