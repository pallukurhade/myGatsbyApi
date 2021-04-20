import React, {useState } from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import Layout from "../components/layout"


const ContactPage = () => {


// Check Validation of form 
const [submitted, setSubmitted] = useState(false);
 
      
 // Yup Parameters for all fields validations
const validationSchema = Yup.object().shape({
        firstName: Yup.string().required('First name is required!'),
        lastName: Yup.string().required('Last name is required!'),
        email: Yup.string().email('Invalid email address!').required('Email address is required!'),
        phoneNumber: Yup.number().required('Phone number is required!').integer().positive(),
          
});
  
// Thank you message after form is isSubmitted is set true
const showThankYou = (
   <div className="msg-confirm">
       <p> Thanks for contacting us! We will get in touch with you shortly. </p>
    </div>
    
);


const showForm = (  
    <Formik
              initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: ''
                
              }}
              validationSchema={validationSchema}
              onSubmit={values => {
                setSubmitted(true);
              }}
              render={({ errors, touched }) => (
                <Form>
    
                  <div className="form-row">
                    <div className={`form-group ${errors.firstName && touched.firstName && 'has-error'}`}>
                      <label htmlFor="firstName">First Name</label>
                      <Field name="firstName" className="form-control" placeholder="First Name" type="text" />
                      { errors.firstName && touched.firstName && <span className="help-block">{errors.firstName}</span> }
                    </div>
                    <div className={`form-group ${errors.lastName && touched.lastName && 'has-error'}`}>
                      <label htmlFor="lastName">Last Name</label>
                      <Field name="lastName" className="form-control" placeholder="Last Name" type="text" />
                      { errors.lastName && touched.lastName && <span className="help-block">{errors.lastName}</span> }
                    </div>
                  </div>
                  <div className="form-row">
                    <div className={`form-group ${errors.email && touched.email && 'has-error'}`}>
                      <label htmlFor="email">Email</label>
                      <Field name="email" className="form-control" placeholder="teddy@pixventive.com" type="email" />
                       { errors.email && touched.email && <span className="help-block">{errors.email}</span> }
                    </div>
                    <div className={`form-group ${errors.phoneNumber && touched.phoneNumber && 'has-error'}`}>
                      <label htmlFor="phoneNumber">Phone Number</label>
                      <Field name="phoneNumber" className="form-control" placeholder="Phone Number" type="text" />
                      { errors.phoneNumber && touched.phoneNumber && <span className="help-block">{errors.phoneNumber}</span> }
                    </div>
                  </div>
                  <div className="form-row">
                
                       <button type="submit" className="btn">Send</button>
                  </div>
                 
                </Form>
        )} />
  );

  
  /* Shows the form and perform the validations */
  return (
   <section className="hero">
    <div className="contact-section">
        <div className="contact-info">
         <h4 className="text-center">Contact Us</h4>
        </div>
       <div className="form-side">{submitted ? showThankYou : showForm}</div>
    </div>
   </section>   
  );


};


export default ContactPage;

