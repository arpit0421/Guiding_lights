import NavBar from './NavBar'
import Head from 'next/head'
import Footer from './Footer'
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
            <Footer/>
        </>   
    )
}

export default Layout