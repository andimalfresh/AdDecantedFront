import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'


const handleSubmit = async (values, actions) => {
    window.console.log('test!')
}

const Survey = () => {
    return (
        <div>
            <Formik 
              validateOnChange
              initialValues={{
                  name:'',
                  email:'',
                  phone:'',
              }}
              validationSchema={Yup.object().shape({
                name: Yup.string()
                .required('Name is required')
                .min(2, 'Must enter a valid name'),
                email: Yup.string()
                .email('Must enter a valid email address')
                .required('Email is required'),
                phone: Yup.string()
                .required('Phone Number is required')
                .min(2, 'Must enter valid first name'),
              })}
              onSubmit={handleSubmit}
              >
                   {({ isSubmitting, errors, touched, values }) => (
                    <Form>
                        <Field name="name" type="text" className="input is-small" />
                        <Field name="email" type="text" className="input is-small" />
                        <Field name="phone" type="text" className="input is-small" />
                    </Form>
                   )}
                
            </Formik>
        </div>
    ) 

}

export default Survey