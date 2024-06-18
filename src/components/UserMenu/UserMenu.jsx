import { useDispatch, useSelector } from "react-redux"
import { selectUser } from "../../redux/auth/selector";
import { logOut } from "../../redux/auth/authApi";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser)
   
    return(
        <>
            <p>Welcome, {user.name} </p>   
        <button type="button" onClick={()=>dispatch(logOut())}>
            LogOut
        </button>
        </>
    )
}