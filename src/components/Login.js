import React from 'react';
import { useFormik, FormikProvider, Field, ErrorMessage, Form } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Login.css'; // Import your CSS file for styling

// Define validation schema with Yup
const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Email is Required'),
  password: Yup.string().required('Password is Required'),
  remember: Yup.boolean()
});

const Login = () => {
  // Initialize Formik
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      remember: false
    },
    validationSchema,
    onSubmit: (values) => {
      // Handle form submission
      console.log(values);
    }
  });

  return (
    <section className="login">
      <div className="form-box">
        <div className="form-value">
          <FormikProvider value={formik}>
            <Form onSubmit={formik.handleSubmit}>
              <h2>Login</h2>

              <div className="inputbox">
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="form-control"
                />
                <ErrorMessage name="email" component="div" className="error" />
              </div>

              <div className="inputbox">
                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="form-control"
                />
                <ErrorMessage name="password" component="div" className="error" />
              </div>

              <div className="forget">
                <label>
                  <Field
                    type="checkbox"
                    name="remember"
                  />

                  Remember me
                </label>
                <a href="#">Forgot password?</a>
              </div>

              <button type="submit">Log In</button>

              <div className="register">
                <p>Don't have an account? <Link to="/registration">Register</Link></p>
              </div>
            </Form>
          </FormikProvider>
        </div>
      </div>
    </section>
  );
};

export default Login;
