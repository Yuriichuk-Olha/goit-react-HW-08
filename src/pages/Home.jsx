const styles = {
    conteiner:{
        display:'flex',
        alingItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontWeight: 500,
        fontSize: 48,
        textAlign: 'center',
    }
}

export default function Home() {
    return(
        <div style={styles.conteiner}>
            <h1 style={styles.title}>
                Welcome Phonebook
            </h1>
        </div>
    )
}