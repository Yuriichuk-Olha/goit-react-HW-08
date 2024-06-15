export const LoginForm = () => {

    const handelSubmit = (e) => {
        e.preventDefault();

    }

    return (
        <form onSubmit={handelSubmit}>
            <label type='email' name='email'>
                Email
                <input type="email" name="email"/>
            </label>
            <label type='password' name='password'>
                Password
                <input type="password" name="password"/>
            </label>
            <button type="submit">Log In</button>
        </form>
    )
}