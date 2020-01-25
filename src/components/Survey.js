import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'


const handleSubmit = async (values) => {
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
                .min(10, 'Must enter a valid phone number')
                .max(10,'Must enter a vaild phone number'),
              })}
              onSubmit={handleSubmit}
              >
                   {({ isSubmitting, errors, touched, values }) => (
                    <Form>
                        <div className='formContainer'>
                            <span className='formExplanation'>Enter your information below.</span>
                            <div className='formElement'>
                                <Field className='formSize' placeholder='Enter Name' name='name' type='text' className='input is-small' />
                                {errors.name && touched.name ? (<label className='errorText'>{errors.name}</label>) : null}
                            </div>
                            <div className='formElement'>
                                <Field className='formSize' placeholder='Enter Email' name='email' type='text' className='input is-small' />
                                {errors.email && touched.email ? (<label className='errorText'>{errors.email}</label>) :null}
                            </div>
                            <div className='formElement'>
                                <Field placeholder='Enter Phone' name='phone' type='text' className='input is-small' />
                                {errors.phone && touched.phone ? (<label className='errorText'>{errors.phone}</label>) : null}
                            </div>
                            <div className='formElement'>
                                <button onClick={handleSubmit}>Submit</button>
                            </div>
                        </div>
                    </Form>
                   )}
                
            </Formik>
        </div>
    ) 

}

export default Survey