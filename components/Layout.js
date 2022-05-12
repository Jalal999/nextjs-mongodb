import styles from '../styles/Layout.module.css'
import NavBar from './Navigation'
import Header from './Header'
import Meta from './Meta'

const Layout = ({ children }) => {
    return (
        <>
            <Meta />
            <NavBar />
            <div className={styles.container}>
                <main className={styles.main}>
                    <Header />
                    { children }
                </main>
            </div>
        </>
        
    )
}

export default Layout