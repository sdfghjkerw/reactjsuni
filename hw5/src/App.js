import React from "react"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup"
import "./App.css"

const App = () => {
  const initialValues={fullName:"", email:"", password:"", course:"", gender:"", datebirth:"", 
    city:"", country:"", education:"", address:"", state:"", zip:""}
  
    const validationScheme = Yup.object({
      fullName: Yup.string()
      .required("Full name is required"),

      email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),

      password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),

      course: Yup.string()
      .required("Please select a course"),

      gender: Yup.string()
      .required("Please select gender"),

      datebirth: Yup.date()
      .required("Date of birth is required"),

      city: Yup.string()
      .required("City is required"),

      country: Yup.string()
      .required("Country is required"),

      zip: Yup.string()
      .matches(/^[0-9]+$/, "Zip contained only numbers")
    })

  return(
    <div className="main">
      <div className="cont">
      <h1>Course Application</h1>
      <Formik initialValues={initialValues}
      validationSchema={validationScheme}
      onSubmit={(values) => {alert(JSON.stringify(values, null, 2))}}
      >
      {({errors, touched}) => (
        <Form>
          <Field name="fullName"className="input" type="text" placeholder="full name"></Field>
          <ErrorMessage name="fullName" component="div" className="error"></ErrorMessage>

        <div className="emNpass">
          <Field name="email"className="input" type="email" placeholder="email"></Field>
          <ErrorMessage name="email" component="div" className="error"></ErrorMessage>

          <Field name="password"className="input" type="password" placeholder="password"></Field>
          <ErrorMessage name="password" component="div" className="error"></ErrorMessage>
        </div>

        <label>which course are you applying to?</label>
        <div className="RadButton2">
          <label><Field name="course" type="radio" value="Course A"/>Course A</label>
          <label><Field name="course" type="radio" value="Course B"/>Course B</label>
          <label><Field name="course" type="radio" value="Course C"/>Course C</label>
        </div>

        <ErrorMessage name="course" component="div" className="error"></ErrorMessage>

        <div className="secCont">
          <div className="datebirth">
            <label>date ob birth</label>
            <Field name="datebirth" type="date" className="input"></Field>
            <ErrorMessage name="datebirth" component="div" className="error"></ErrorMessage>
          </div>
          <div className="Gender">
            <div className="RadButton">
            <label><Field name="gender" type="radio" value="Female"/>Female</label>
            <label><Field name="gender" type="radio" value="male"/>male</label>
            <ErrorMessage name="gender" component="div" className="error"></ErrorMessage>
            </div>
          </div>
        </div>

        <label>Education</label>
        <Field as="select" name="education" className="input">
          <option value="">choose option</option>
          <option value="school">school</option>
          <option value="college">college</option>
          <option value="university">university</option>
        </Field>

        <Field as="textarea" name="address" className="input">Address</Field>

        <div className="contThird">
          <div className="cityy">
            <Field name="city"className="input" type="text" placeholder="city"></Field>

            <Field name="state"className="input" type="text" placeholder="state"></Field>
          </div>
          
          <div>
            <Field name="zip"className="input" type="text" placeholder="zip code"></Field>
            <ErrorMessage name="zip" component="div" className="error"></ErrorMessage>

            <Field as="select" name="country" className="input">
              <option value="">country</option>
              <option value="Kazakhstan">Kazakhstan</option>
              <option value="usa">usa</option>
              <option value="uk">uk</option>
            </Field>
            <ErrorMessage name="country" component="div" className="error"></ErrorMessage>
          </div>

        </div>
        <button type="submit" className="submitbtn">submit</button>
        </Form>
      )}
      </Formik>
      </div>
    </div>
  )
}

export default App