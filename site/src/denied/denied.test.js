import { render, screen } from '@testing-library/react';

import * as router from 'react-router'
import Denied from './denied';

const navigate = jest.fn()

beforeEach(() => {
  jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate)
})

test('renders denied message and sign up button', () => {
  render(<Denied />);
  const deniedmessage = screen.getByText(/Sorry, your application was not successful./);
  const signUpButton = screen.getByText(/Sign Up/);
  expect(deniedmessage).toBeInTheDocument();
  expect(signUpButton).toBeInTheDocument();
});
