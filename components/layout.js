import NavBar from './NavBar'
import Head from 'next/head'

//make a footer component and add it to the Layout

const Layout = ({children})=>{
    return(
        <>
            <Head></Head>
            <div className="container">
                <NavBar/>
            </div>
            
            <div className="container mt-20">
                {children}
            </div>
            
        </>   
    )
}

export default Layout