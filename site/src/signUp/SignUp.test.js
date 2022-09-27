import { render, screen } from '@testing-library/react';
import SignUp from './SignUp';

import * as router from 'react-router'

const navigate = jest.fn()

beforeEach(() => {
  jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate)
})

test('renders all form fields and submit button', () => {
  render(<SignUp />);
  const firstName = screen.getByPlaceholderText(/First Name/);
  const lastName = screen.getByPlaceholderText(/Last Name/);
  const addressLine1 = screen.getByPlaceholderText(/Address Line 1/);
  const addressLine2 = screen.getByPlaceholderText(/Address Line 2/);
  const city = screen.getByPlaceholderText(/City/);
  const state = screen.getByPlaceholderText(/State/);
  const zipPostalCode = screen.getByPlaceholderText(/Zip\/Postal Code/);
  const country = screen.getByPlaceholderText(/Country/);
  const ssn = screen.getByPlaceholderText(/SSN/);
  const email = screen.getByPlaceholderText(/Email/);
  const dateOfBirth = screen.getByPlaceholderText(/Date of Birth/);

  const submitButton = screen.getByText(/Submit/);

  expect(firstName).toBeInTheDocument();
  expect(lastName).toBeInTheDocument();
  expect(addressLine1).toBeInTheDocument();
  expect(addressLine2).toBeInTheDocument();
  expect(city).toBeInTheDocument();
  expect(state).toBeInTheDocument();
  expect(zipPostalCode).toBeInTheDocument();
  expect(country).toBeInTheDocument();
  expect(ssn).toBeInTheDocument();
  expect(email).toBeInTheDocument();
  expect(dateOfBirth).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});
