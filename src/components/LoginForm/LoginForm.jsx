import { Field, Form, Formik } from "formik"
import { useDispatch } from "react-redux"
import {logIn} from '../../redux/auth/authApi'

import css from './LoginForm.module.css'


export const LoginForm = () => {
    const dispatch = useDispatch()

    const handleSubmit=(values,actions)=>{
        console.log(values)
        dispatch(logIn(values))
        .unwrap()
        .then(data=>console.log(data))
        .catch(()=>alert('LogIn error!'))
        actions.resetForm()
    }
    return (
        <div className={css.formContainer}>

        
        <Formik 
        initialValues={{
            email:"",
            password:"",
        }}
        onSubmit={handleSubmit}
        >
        <Form autoComplete="off">
            <label htmlFor='name' className={css.label}>
                Email
                <Field className={css.inputField} type="email" name="email"/>
            </label>
            <label className={css.label}>
                Password
                <Field className={css.inputField} type="password" name="password"/>
            </label>
           {/*  <ErrorMessage name="password"
            component='div'
            lassName={css.errorMessage}
          /> */}
            <button className={css.submitButton} type="submit">Log In</button>
        </Form>
        </Formik>
        </div>
    )
}