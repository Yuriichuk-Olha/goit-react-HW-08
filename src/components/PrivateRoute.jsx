import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selector";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({component, redirectTo}){
    const isLoggeIn = useSelector(selectIsLoggedIn)
    return isLoggeIn ? component : <Navigate to={redirectTo}/>
}