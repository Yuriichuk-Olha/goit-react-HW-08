import {NavLink} from 'react-router-dom'

export const AuthNav = () => {
    return(
        <>
        <NavLink to='/register'>
            Register
        </NavLink>
        <NavLink to='/login'>
            Lig In
        </NavLink>
        </>
    )
}