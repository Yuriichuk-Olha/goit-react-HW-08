import { NavLink } from "react-router-dom"
import { selectIsLoggedIn } from "../../redux/auth/selector"

export const Navigation = () => {

    return (
        <nav>
            <NavLink to="/">
                Home
            </NavLink>
            {selectIsLoggedIn && (
                <NavLink to='/contacts'>
                    Contacts
                </NavLink>
            )}

        </nav>
    )
}