import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/authApi";
import { Formik, Field, Form } from "formik";


export const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleSubmit=(values, actions)=>{
        //console.log(values)
        dispatch(register(values))
        .unwrap()
        .then(data=>console.log(data))
        .catch(error=>console.log(error)) 
        //.catch(()=>alert('Registration error!'))
        actions.resetForm()
    }
    return (
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
        <label htmlFor='name'>
            Username
            <Field type="text" name="name"/>
        </label>
        <label htmlFor='email'>
            Email
            <Field type="email" name="email"/>
        </label>
        <label >
            Password
            <Field type="password" name="password" />
        </label>
        <button type="submit">Register</button>
    </Form>
        </Formik>
    );
}