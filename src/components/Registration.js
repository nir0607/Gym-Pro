import React from 'react';
import { useFormik, FormikProvider, Field, ErrorMessage, Form } from 'formik';
import * as Yup from 'yup';
import './Login.css'; // Reuse the CSS file for consistency

const Registration = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    confirmpassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm password is required'),
    dateOfBirth: Yup.date().required('Date of birth is required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log('Form data', values);
    // Handle form submission here
    resetForm();
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmpassword: '',
      dateOfBirth: '',
    },
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <section className="login">
      <div className="form-box">
        <div className="form-value">
          <FormikProvider value={formik}>
            <Form onSubmit={formik.handleSubmit}>
              <h2>Register</h2>

              <div className="inputbox">
                <Field
                  className="form-control"
                  type="text"
                  name="name"
                  placeholder="Name"
                />
                <ErrorMessage name="name" component="div" className="error" />
              </div>

              <div className="inputbox">
                <Field
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
                <ErrorMessage name="email" component="div" className="error" />
              </div>

              <div className="inputbox">
                <Field
                  className="form-control"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <ErrorMessage name="password" component="div" className="error" />
              </div>

              <div className="inputbox">
                <Field
                  className="form-control"
                  type="password"
                  name="confirmpassword"
                  placeholder="Confirm Password"
                />
                <ErrorMessage name="confirmpassword" component="div" className="error" />
              </div>

              <div className="inputbox">
                <Field
                  className="form-control"
                  type="date"
                  name="dateOfBirth"
                />
                <ErrorMessage name="dateOfBirth" component="div" className="error" />
              </div>

              <button type="submit" className="btn btn-primary">Register</button>
            </Form>
          </FormikProvider>
        </div>
      </div>
    </section>
  );
};

export default Registration;
