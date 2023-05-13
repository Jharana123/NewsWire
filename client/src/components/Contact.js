import React from 'react'
import emailjs from "emailjs-com";
import { useFormik } from "formik";
import * as Yup from "yup";
// import emailjs from "emailjs-com";
import Alert from "react-bootstrap/Alert";
import { showToast } from "./utils/ShowToast";
function Contact() {
  function sendEmail(event) {
    emailjs
      .sendForm(
        "service_oijyvis",
        "template_hg20fro",
        event.target,
        "dXKD6MlFrRLbnORjO"
      )
      .then(
        (result) => {
          console.log(result);
          showToast("success", "successfully sent the email");
        },
        (error) => {
          console.log(error.text);
          showToast("error", "something went wrong, please try again later");
        }
      );
     
      
  }
  const formik = useFormik({
    initialValues: {
      name: "",
      message: "",
      email: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(30, "Must be 30 characters or less")
        .required("Sorry, name is required"),
      message: Yup.string()
        .max(500, "Must be 500 characters or less")
        .required("Sorry, message is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Sorry, email is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });

  return (
    <React.Fragment>
      <form
        className=""
        onSubmit={(event) => {
          event.preventDefault();
          sendEmail(event);
          formik.handleSubmit();
        }}
      >
        <div className="mt-4">
          <label htmlFor="name">Name</label>
          <input
            className="form-control"
            id="name"
            type="text"
            placeholder="John Doe"
            {...formik.getFieldProps("name")}
          />
          {formik.touched.name && formik.errors.name ? (
            <Alert className="mt-3" variant="danger">
              {formik.errors.name}
            </Alert>
          ) : null}
        </div>
        <div className="mt-4">
          <label htmlFor="email">Email Address</label>
          <input
            className="form-control"
            id="email"
            type="email"
            placeholder="example@domain.com"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email ? (
            <Alert className="mt-3" variant="danger">
              {formik.errors.email}
            </Alert>
          ) : null}
        </div>

        <div className="mt-4">
          <label htmlFor="message">Your Message</label>
          <textarea
            className="form-control"
            id="message"
            placeholder="message ..."
            {...formik.getFieldProps("message")}
          />
          {formik.touched.message && formik.errors.message ? (
            <Alert className="mt-3" variant="danger">
              {formik.errors.message}
            </Alert>
          ) : null}
        </div>

        <button className="btn btn-primary mt-4" type="submit">
          Submit
        </button>
      </form>
    </React.Fragment>
  );
}

export default Contact