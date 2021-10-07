import React, { Component } from "react";

import { ErrorMessage, Field, Form, Formik } from "formik";

export default class SearchForm extends Component {
  render() {
    const { searchMovie } = this.props;
    return (
      <>
        <Formik
          initialValues={{ search: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.search) {
              errors.search = "Search for a film";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              searchMovie(values.search);
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field
                type="search"
                name="search"
                placeholder="Try a movie's name"
              />
              <ErrorMessage name="search" component="div" />
              <button type="submit" disabled={isSubmitting}>
                Search
              </button>
            </Form>
          )}
        </Formik>
      </>
    );
  }
}
