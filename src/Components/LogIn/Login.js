import React, { Component } from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Header from "../Header/Header";
import Title from "../Title/Title";
import "./LogIn.scss";

export const LogInDiv = styled.div`
  margin: auto;
  padding: 0.5rem;
  height: auto;
  width: 37.5rem;
  background-color: black;
  box-shadow: 0px 0px 30px white;
  border-radius: 0.5rem;
  border: 1.5px solid white;
`;

const SignDiv = styled.p`
  color: #7b828b;
  font-size: 1.2rem;
  margin: 4rem 38%;
  text-decoration: inherit;
`;

export default class LogIn extends Component {
  render() {
    const { logInUser } = this.props;
    return (
      <>
        <Header />
        <Title />
        <LogInDiv>
          <Formik
            initialValues={{ email: "", password: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                logInUser(values);
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
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </LogInDiv>
        <Link to="/sign-up">
          <SignDiv>Don't have an account? Sign up here!</SignDiv>
        </Link>
      </>
    );
  }
}
