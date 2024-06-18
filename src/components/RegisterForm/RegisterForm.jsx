import { useDispatch } from "react-redux";
import { Formik, Field, Form } from "formik";
import { register } from "../../redux/auth/authApi";

import css from './RegisterForm.module.css'

export const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleSubmit=(values, actions)=>{
        console.log(values)
        dispatch(register(values))
        .unwrap()
        .then(data=>console.log(data))
        .catch(error=>console.log(error)) 
        //.catch(()=>alert('Registration error!'))
        actions.resetForm()
    }
    return (
        <div className={css.formContainer}>        
        <Formik 
        initialValues={{
            name:"",
            email:"",
            password:"",
        }}
        onSubmit={handleSubmit}
        >

    <Form autoComplete="off" 
    //onSubmit={handleSubmit}
    >
        <label htmlFor='name' className={css.label}>
            Username
            <Field type="text" name="name" className={css.inputField}/>
        </label>
        <label htmlFor='email'>
            Email
            <Field type="email" name="email" className={css.inputField}/>
        </label>
        <label className={css.label}>
            Password
            <Field type="password" name="password" className={css.inputField}/>
        </label>
       {/*  <ErrorMessage
            name="password"
            component="div"
            className={css.errorMessage}
          /> */}
        <button type="submit" className={css.submitButton}>Register</button>
    </Form>
        </Formik>
        </div>
    );
}