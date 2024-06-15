import { useDispatch } from "react-redux"
import { selectUser } from "../../redux/auth/selector";
import { logOut } from "../../redux/auth/authApi";

export const UserMenu = () => {
    const dispatch = useDispatch();
    return(
        <>
        <p>Welcome, {selectUser.name}</p>
        <button type="button" onClick={()=>dispatch(logOut())}>
            LogOut
        </button>
        </>
    )
}