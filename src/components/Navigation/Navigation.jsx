import { NavLink } from "react-router-dom"
import { selectIsLoggedIn } from "../../redux/auth/selector"
import { useSelector } from "react-redux"

export const Navigation = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn)
    //console.log(isLoggedIn)
    return (
        <nav>
            <NavLink to="/">
                Home
            </NavLink>
            {isLoggedIn && (
                <NavLink to='/contacts'>
                    Contacts
                </NavLink>
            )}

        </nav>
    )
}