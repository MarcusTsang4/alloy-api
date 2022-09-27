import { render, screen } from '@testing-library/react';

import * as router from 'react-router'
import Approved from './approved';

const navigate = jest.fn()

beforeEach(() => {
  jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate)
})

test('renders success message and sign up button', () => {
  render(<Approved />);
  const successMessage = screen.getByText(/Success!/);
  const signUpButton = screen.getByText(/Sign Up/);
  expect(successMessage).toBeInTheDocument();
  expect(signUpButton).toBeInTheDocument();
});
