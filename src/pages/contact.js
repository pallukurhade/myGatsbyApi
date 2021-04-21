import React, {useState } from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import Layout from "../components/layout"
import Banner from "../components/Banner"
import pageImage from "../images/contact-img.jpg"



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
                      { errors.firstName && touched.firstName && <p className="help-block">{errors.firstName}</p> }
                    </div>
                    <div className={`form-group ${errors.lastName && touched.lastName && 'has-error'}`}>
                      <label htmlFor="lastName">Last Name</label>
                      <Field name="lastName" className="form-control" placeholder="Last Name" type="text" />
                      { errors.lastName && touched.lastName && <p className="help-block">{errors.lastName}</p> }
                    </div>
                  </div>
                  <div className="form-row">
                    <div className={`form-group ${errors.email && touched.email && 'has-error'}`}>
                      <label htmlFor="email">Email</label>
                      <Field name="email" className="form-control" placeholder="hello@gmail.com" type="email" />
                       { errors.email && touched.email && <p className="help-block">{errors.email}</p> }
                    </div>
                    <div className={`form-group ${errors.phoneNumber && touched.phoneNumber && 'has-error'}`}>
                      <label htmlFor="phoneNumber">Phone Number</label>
                      <Field name="phoneNumber" className="form-control" placeholder="Phone Number" type="text" />
                      { errors.phoneNumber && touched.phoneNumber && <p className="help-block">{errors.phoneNumber}</p> }
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
    <Layout> 
    <section>
     <Banner 
     style={{ backgroundImage: `url(${pageImage})`,
     backgroundPosition: 'top',
     backgroundSize: 'cover',
     backgroundRepeat: 'no-repeat'
     
     }} 
     pageTitle="Contact Us"
     />
     <div className="contact-section">
         <div className="form-side">{submitted ? showThankYou : showForm}</div>
    </div>
   </section>   
   </Layout> 
  );


};


export default ContactPage;

