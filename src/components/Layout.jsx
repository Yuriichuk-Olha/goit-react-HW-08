import {AppBar} from '../components/AppBar/AppBar'

const style = {
    main:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50,
        
    }
}


export const Layout = ({ children }) => {
    return (
        <div>
            <AppBar />
            <main style={style.main}>
                {children}
            </main>
        </div>
    )
} 
