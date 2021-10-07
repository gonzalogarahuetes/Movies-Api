import React, { Component } from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";

import Header from "../Header/Header";
import { LogInDiv } from "../LogIn/Login";

export default class SignUp extends Component {
  render() {
    const { signUpUser } = this.props;
    return (
      <>
        <Header />
        <LogInDiv>
          <Formik
            initialValues={{ email: "", password: "", repeatPassword: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              } else if (!values.password) {
                errors.password = "Required";
              } else if (!values.repeatPassword) {
                errors.repeatPassword = "Required";
              } else if (values.password !== values.repeatPassword) {
                errors.password = "Both passwords must match";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                signUpUser(values);
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <Field type="email" name="email" placeholder="email" />
                <ErrorMessage name="email" component="div" />
                <Field type="password" name="password" placeholder="password" />
                <ErrorMessage name="password" component="div" />
                <Field
                  type="password"
                  name="repeatPassword"
                  placeholder="repeat password"
                />
                <ErrorMessage name="repeatPassword" component="div" />
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </LogInDiv>
      </>
    );
  }
}
