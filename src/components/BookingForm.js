// src/components/BookingForm.js
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './BookingForm.css';

const BookingForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      phone: Yup.string().matches(/^[0-9]+$/, "Must be a valid phone number").required('Required'),
      date: Yup.date().required('Required'),
      time: Yup.string().required('Required'),
      guests: Yup.number().min(1, 'Must be at least 1 guest').required('Required'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="booking-form">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input id="name" type="text" {...formik.getFieldProps('name')} />
        {formik.touched.name && formik.errors.name ? <div className="error">{formik.errors.name}</div> : null}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" {...formik.getFieldProps('email')} />
        {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input id="phone" type="text" {...formik.getFieldProps('phone')} />
        {formik.touched.phone && formik.errors.phone ? <div className="error">{formik.errors.phone}</div> : null}
      </div>

      <div className="form-group">
        <label htmlFor="date">Date</label>
        <input id="date" type="date" {...formik.getFieldProps('date')} />
        {formik.touched.date && formik.errors.date ? <div className="error">{formik.errors.date}</div> : null}
      </div>

      <div className="form-group">
        <label htmlFor="time">Time</label>
        <input id="time" type="time" {...formik.getFieldProps('time')} />
        {formik.touched.time && formik.errors.time ? <div className="error">{formik.errors.time}</div> : null}
      </div>

      <div className="form-group">
        <label htmlFor="guests">Number of Guests</label>
        <input id="guests" type="number" {...formik.getFieldProps('guests')} />
        {formik.touched.guests && formik.errors.guests ? <div className="error">{formik.errors.guests}</div> : null}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default BookingForm;