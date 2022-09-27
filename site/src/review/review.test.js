import { render, screen } from '@testing-library/react';

import * as router from 'react-router'
import Reivew from './review';

const navigate = jest.fn()

beforeEach(() => {
  jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate)
})

test('renders review message and sign up button', () => {
  render(<Reivew />);
  const reviewMessage = screen.getByText(/Thanks for submitting your application, we'll be in touch shortly!/);
  const signUpButton = screen.getByText(/Sign Up/);
  expect(reviewMessage).toBeInTheDocument();
  expect(signUpButton).toBeInTheDocument();
});
