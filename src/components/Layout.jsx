import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import {AppBar} from '../components/AppBar/AppBar'


const style = {
    main:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50,
        
    }
}

export const Layout = () => {
    return (
        <div>
            <AppBar/>
            <main style={style.main}>
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
            </Suspense>
            </main>
            
        </div>
    )
}