import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { useId } from 'react';
import { Form, ErrorMessage, Field, Formik } from 'formik';
import { nanoid } from '@reduxjs/toolkit';

import css from './ContactForm.module.css';
import { addContact } from '../../redux/contacts/operations';


const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'min 3 characters')
    .max(50, 'max 50 characters')
    .required('Required'),
  number: Yup.string()
    .min(3, 'min 3 characters')
    .max(50, 'max 50 characters')
    .required('Required'),
});

const initialValues = { name: '', number: '' };

const ContactForm = () => {
  const nameId = useId();
  const numberId = useId();

  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact({ ...values, id: nanoid() }));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.field}>
          <label htmlFor={nameId}>Name</label>
          <Field id={nameId} name="name" className={css.input} />
          <ErrorMessage name="name" component="span" className={css.error} />
        </div>

        <div className={css.field}>
          <label htmlFor={numberId}>Number</label>
          <Field id={numberId} name="number" className={css.input} />
          <ErrorMessage name="number" component="span" className={css.error} />
        </div>

        <button type="submit" className={css.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
