import { selectIsLoggedIn } from "../../redux/auth/selector"
import { AuthNav } from "../AuthNav/AuthNav"
import { Navigation } from "../Navigation/Navigation"
import { UserMenu } from "../UserMenu/UserMenu"


const style = {
    header:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
        borderBottom: '1px solid #2a363b'
    }
}
export const AppBar = () => {

    return (
    <header style={style.header}>
        <Navigation /> 
        {selectIsLoggedIn ? 
        <UserMenu/> : <AuthNav/>}
    </header>
    )
}
