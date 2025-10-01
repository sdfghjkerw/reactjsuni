import React from "react"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import "./App.css"

const App = () => {
  const initialValues={fullName:"", email:"", password:"", course:"", gender:"", datebirth:"", 
    city:"", country:"", education:"", address:"", state:"", zip:""}
  const validate = (values) => {
    const errors = {}

    if(!values.fullName){
      errors.fullName = "Full name is required"
    }

    if (!values.email) {
      errors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Password is required"
    } else if (values.password.lenght < 6){
      errors.password = "Password must be at least 6 characters"
    }

    if(!values.course){
      errors.course = "Please select a course"
    }

    if(!values.gender){
      errors.gender = "Please select gender"
    }
        
    if(!values.datebirth){
      errors.datebirth = "Date of birth is required"
    }

    if(!values.city){
      errors.city = "City is required"
    }

    if(!values.country){
      errors.country = "Country is required"
    }

    if(!values.zip && !/^[0-9]+$/.test(values.zip)){
      errors.zip = "Zip contained only numbers"
    }

    return errors
  }

  const onSubmit = (values, {resetForm}) => {
    alert(JSON.stringify(values, null, 2))
    resetForm()
  }

  return(
    <div className="main">
      <div className="cont">
      <h1>Course Application</h1>
      <Formik initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
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
        <ErrorMessage name="courses" component="div" className="error"></ErrorMessage>

        <div className="secCont">
          <div className="datebirth">
            <label>date ob birth</label>
            <Field name="datebirth" type="date" className="input"></Field>
            <ErrorMessage name="datebirth" component="div" className="error"></ErrorMessage>
          </div>
          <div className="Gender">
            <div className="RadButton">
              <label><Field name="gender" type="radio" value="Male"/>Male</label>
              <label><Field name="gender" type="radio" value="Female"/>Female</label>
            </div>
            <ErrorMessage name="gender" component="div" className="error"></ErrorMessage>
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

            <Field name="State"className="input" type="text" placeholder="state"></Field>
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