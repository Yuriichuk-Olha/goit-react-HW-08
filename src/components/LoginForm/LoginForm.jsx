import { Field, Form, Formik } from "formik"
import { useDispatch } from "react-redux"
import {logIn} from '../../redux/auth/authApi'

export const LoginForm = () => {
    const dispatch = useDispatch()
    const handleSubmit=(values,actions)=>{
        console.log(values)
        dispatch(logIn(values))
        actions.resetForm()
    }

    return (
        <Formik 
        initialValue={{
            email:"",
            password:"",
        }}
        onSubmit={handleSubmit}
        >
        <Form autoComplete="off">
            <label type='email' name='email'>
                Email
                <Field type="email" name="email"/>
            </label>
            <label type='password' name='password'>
                Password
                <Field type="password" name="password"/>
            </label>
            <button type="submit">Log In</button>
        </Form>
        </Formik>
    )
}