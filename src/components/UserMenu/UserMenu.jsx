import { useDispatch, useSelector } from "react-redux"
import { selectUser } from "../../redux/auth/selector";
import { logOut } from "../../redux/auth/operations";

import css from '../UserMenu/UserMenu.module.css'
export const UserMenu = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser)
   
    return(
        < div className={css.wrapper}>
            <p className={css.name}>Welcome, {user.name} </p>   
        <button className={css.logoutButton} type="button" onClick={()=>dispatch(logOut())}>
            LogOut
        </button>
        </div>
    )
}