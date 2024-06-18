import { NavLink } from "react-router-dom"
import { selectIsLoggedIn } from "../../redux/auth/selector"
import { useSelector } from "react-redux"
import css from '../Navigation/Navigation.module.css'

export const Navigation = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn)
    //console.log(isLoggedIn)
    return (
        <nav>
            <NavLink to="/"className={css.link}>
                Home
            </NavLink>
            {isLoggedIn && (
                <NavLink to='/contacts' className={css.link}>
                    Contacts
                </NavLink>
            )}

        </nav>
    )
}