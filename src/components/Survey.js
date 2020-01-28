import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

 const customersAPI = "https://addecanted-db.herokuapp.com/CUSTOMERS"

const handleSubmit = async values => {
  window.console.log(values)
  fetch(customersAPI, {
      method: "POST", 
      body: JSON.stringify(values), 
      headers: {
        "Content-Type": "application/json", 
      }
    })
    window.location.replace("https://adventuresdecantedmailinglist.firebaseapp.com")
  }

const Survey = () => {
  return (
    <div>
      <Formik
        validateOnChange
        initialValues={{
          name: "",
          email: "",
          phone: ""
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string()
            .required("Name is required")
            .min(2, "Must enter a valid name"),
          email: Yup.string()
            .email("Must enter a valid email address")
            .required("Email is required"),
          phone: Yup.string()
            .required("Phone Number is required")
            .min(10, "Must enter a valid phone number")
            .max(10, "Must enter a vaild phone number")
        })}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, touched, values }) => (
          <Form>
            <div className="formContainer">
              <span className="formExplanation">
                Enter your information below.
              </span>
              <div className="formElement">
                <Field
                  className="formSize"
                  placeholder="Enter Name"
                  name="name"
                  type="text"
                  className="input"
                />
                {errors.name && touched.name ? (
                  <label className="errorText">{errors.name}</label>
                ) : null}
              </div>
              <div className="formElement">
                <Field
                  className="formSize"
                  placeholder="Enter Email"
                  name="email"
                  type="text"
                  className="input"
                />
                {errors.email && touched.email ? (
                  <label className="errorText">{errors.email}</label>
                ) : null}
              </div>
              <div className="formElement">
                <Field
                  placeholder="Enter Phone"
                  name="phone"
                  type="text"
                  className="input"
                />
                {errors.phone && touched.phone ? (
                  <label className="errorText">{errors.phone}</label>
                ) : null}
              </div>
              <div className="formElement">
                <button type='submit' disabled={isSubmitting}>Submit</button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Survey;
