// src/tests/BookingForm.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from '../components/BookingForm';

test('renders the booking form with initial state', () => {
  render(<BookingForm />);
  expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/phone/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/date/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/time/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
});

test('validates the form inputs correctly', () => {
  render(<BookingForm />);
  fireEvent.click(screen.getByText(/submit/i));
  expect(screen.getByText(/required/i)).toBeInTheDocument();
});